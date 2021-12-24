using Newtonsoft.Json;

namespace SpotifyAPI.Web
{
  public class CurrentlyPlayingContext
  {
    public Device Device { get; set; } = default!;
    public string RepeatState { get; set; } = default!;
    public bool ShuffleState { get; set; }
    public Context Context { get; set; } = default!;
    public long Timestamp { get; set; }
    public int ProgressMs { get; set; }
    public bool IsPlaying { get; set; }

    /// <summary>
    /// Can be a FullTrack or FullEpisode
    /// </summary>
    /// <value></value>
    [JsonConverter(typeof(PlayableItemConverter))]
    public BasePlayableItem Item { get; set; } = default!;

    public string CurrentlyPlayingType { get; set; } = default!;
    public Actions Actions { get; set; } = default!;
  }

  public class CurrentlyPlayingContext<T> : CurrentlyPlayingContext where T : BasePlayableItem
  {
    public new T Item
    {
      get => (T)base.Item;
      set => base.Item = value;
    }
  }
}

