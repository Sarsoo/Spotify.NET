using System;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace SpotifyAPI.Web.Http
{
  public class SnakeCase : JsonNamingPolicy
  {
    public override string ConvertName(string name)
    {
      if(string.IsNullOrWhiteSpace(name))
      {
        return name;
      }else
      {
        return Regex.Replace(string.Concat(name[0].ToString().ToLowerInvariant(), name.Substring(1)), "[A-Z]", "_$0").ToLowerInvariant();
      }
    }
  }

  public class TextJsonSerializer : IJSONSerializer
  {
    private ModelJsonContext JsonContext;

    public TextJsonSerializer()
    {
      JsonContext = ModelJsonContext.Get();
    }

    public IAPIResponse<T> DeserializeResponse<T>(IResponse response)
    {
      Ensure.ArgumentNotNull(response, nameof(response));

      if (
        (
          response.ContentType?.Equals("application/json", StringComparison.Ordinal) is true || response.ContentType == null
        ))
      {
        if(response.Body is string bodyString && !string.IsNullOrWhiteSpace(bodyString))
        {
          var body = (T?)JsonSerializer.Deserialize(response.Body as string ?? "", typeof(T), JsonContext);

          // In order to work out whether track or episode has been returned, first deserialise as BasePlayableItem 
          // which has enum of current playing type, then deserialise again with concrete playing type
          if (body is CurrentlyPlaying currentlyPlaying)
          {
            if(currentlyPlaying.Item.Type is ItemType.Track)
            {
              body = (T?) JsonSerializer.Deserialize(response.Body as string ?? "", typeof(CurrentlyPlaying<FullTrack>), JsonContext);
            }
            else if (currentlyPlaying.Item.Type is ItemType.Episode)
            {
              body = (T?) JsonSerializer.Deserialize(response.Body as string ?? "", typeof(CurrentlyPlaying<FullEpisode>), JsonContext);
            }
          }
          if (body is CurrentlyPlayingContext currentlyPlayingContext)
          {
            if (currentlyPlayingContext.Item.Type is ItemType.Track)
            {
              body = (T?)JsonSerializer.Deserialize(response.Body as string ?? "", typeof(CurrentlyPlayingContext<FullTrack>), JsonContext);
            }
            else if (currentlyPlayingContext.Item.Type is ItemType.Episode)
            {
              body = (T?)JsonSerializer.Deserialize(response.Body as string ?? "", typeof(CurrentlyPlayingContext<FullEpisode>), JsonContext);
            }
          }

          return new APIResponse<T>(response, body!);
        }
      }
      return new APIResponse<T>(response);
    }

    public void SerializeRequest(IRequest request)
    {
      Ensure.ArgumentNotNull(request, nameof(request));

      if (request.Body is string || request.Body is Stream || request.Body is HttpContent || request.Body is null)
      {
        return;
      }

      request.Body = JsonSerializer.Serialize(request.Body, request.Body.GetType(), JsonContext);
    }
  }
}
