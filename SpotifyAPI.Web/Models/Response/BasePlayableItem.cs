using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace SpotifyAPI.Web
{
  public enum ItemType
  {
    Track,
    Episode
  }

  public class BasePlayableItem
  {
    [JsonConverter(typeof(StringEnumConverter))]
    public ItemType Type { get; }
  }
}

