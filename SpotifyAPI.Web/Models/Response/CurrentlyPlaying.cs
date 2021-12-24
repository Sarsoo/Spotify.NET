using Newtonsoft.Json;

namespace SpotifyAPI.Web
{
  public class CurrentlyPlaying
  {
    public Context Context { get; set; } = default!;
    public string CurrentlyPlayingType { get; set; } = default!;
    public bool IsPlaying { get; set; }

    /// <summary>
    /// Can be a FullTrack or FullEpisode
    /// </summary>
    /// <value></value>
    [JsonConverter(typeof(PlayableItemConverter))]
    public BasePlayableItem Item { get; set; } = default!;
    public int? ProgressMs { get; set; }
    public long Timestamp { get; set; }
  }

  public class CurrentlyPlaying<T>: CurrentlyPlaying where T : BasePlayableItem
  {
    public new T Item { 
      get => (T) base.Item; 
      set => base.Item = value; 
    }
  }
}

