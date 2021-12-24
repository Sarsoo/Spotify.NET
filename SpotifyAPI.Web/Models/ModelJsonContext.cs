using System.Text.Json;
using System.Text.Json.Serialization;
using SpotifyAPI.Web.Http;

namespace SpotifyAPI.Web
{
  [JsonSerializable(typeof(Actions))]
  [JsonSerializable(typeof(AlbumsResponse))]
  [JsonSerializable(typeof(ArtistsRelatedArtistsResponse))]
  [JsonSerializable(typeof(ArtistsResponse))]
  [JsonSerializable(typeof(ArtistsTopTracksResponse))]
  [JsonSerializable(typeof(AuthorizationCodeRefreshResponse))]
  [JsonSerializable(typeof(AuthorizationCodeTokenResponse))]
  [JsonSerializable(typeof(CategoriesResponse))]
  [JsonSerializable(typeof(Category))]
  [JsonSerializable(typeof(CategoryPlaylistsResponse))]
  [JsonSerializable(typeof(ClientCredentialsTokenResponse))]
  [JsonSerializable(typeof(Context))]
  [JsonSerializable(typeof(Copyright))]
  [JsonSerializable(typeof(CurrentlyPlaying))]
  [JsonSerializable(typeof(CurrentlyPlaying<FullEpisode>))]
  [JsonSerializable(typeof(CurrentlyPlaying<FullTrack>))]
  [JsonSerializable(typeof(CurrentlyPlayingContext))]
  [JsonSerializable(typeof(CurrentlyPlayingContext<FullEpisode>))]
  [JsonSerializable(typeof(CurrentlyPlayingContext<FullTrack>))]
  [JsonSerializable(typeof(Cursor))]
  [JsonSerializable(typeof(Device))]
  [JsonSerializable(typeof(DeviceResponse))]
  [JsonSerializable(typeof(EpisodesResponse))]
  [JsonSerializable(typeof(FeaturedPlaylistsResponse))]
  [JsonSerializable(typeof(FollowedArtistsResponse))]
  [JsonSerializable(typeof(Followers))]
  [JsonSerializable(typeof(FullAlbum))]
  [JsonSerializable(typeof(FullEpisode))]
  [JsonSerializable(typeof(FullPlaylist))]
  [JsonSerializable(typeof(FullShow))]
  [JsonSerializable(typeof(FullTrack))]
  [JsonSerializable(typeof(Image))]
  [JsonSerializable(typeof(LinkedTrack))]
  [JsonSerializable(typeof(NewReleasesResponse))]
  [JsonSerializable(typeof(PKCETokenResponse))]
  [JsonSerializable(typeof(PlayHistoryItem))]
  [JsonSerializable(typeof(PlaylistTrack<FullTrack>))]
  [JsonSerializable(typeof(PlaylistTrack<FullEpisode>))]
  [JsonSerializable(typeof(PrivateUser))]
  [JsonSerializable(typeof(PublicUser))]
  [JsonSerializable(typeof(RecommendationGenresResponse))]
  [JsonSerializable(typeof(RecommendationSeed))]
  [JsonSerializable(typeof(RecommendationsResponse))]
  [JsonSerializable(typeof(ResumePoint))]
  [JsonSerializable(typeof(SavedAlbum))]
  [JsonSerializable(typeof(SavedEpisodes))]
  [JsonSerializable(typeof(SavedShow))]
  [JsonSerializable(typeof(SavedTrack))]
  [JsonSerializable(typeof(SearchResponse))]
  [JsonSerializable(typeof(Section))]
  [JsonSerializable(typeof(Segment))]
  [JsonSerializable(typeof(ShowsResponse))]
  [JsonSerializable(typeof(SimpleAlbum))]
  [JsonSerializable(typeof(SimpleArtist))]
  [JsonSerializable(typeof(SimpleEpisode))]
  [JsonSerializable(typeof(SimplePlaylist))]
  [JsonSerializable(typeof(SimpleShow))]
  [JsonSerializable(typeof(SimpleTrack))]
  [JsonSerializable(typeof(SnapshotResponse))]
  [JsonSerializable(typeof(TestResponseObject))]
  [JsonSerializable(typeof(TimeInterval))]
  [JsonSerializable(typeof(TrackAudio))]
  [JsonSerializable(typeof(TrackAudioAnalysis))]
  [JsonSerializable(typeof(TrackMeta))]
  [JsonSerializable(typeof(TracksAudioFeaturesResponse))]
  [JsonSerializable(typeof(TracksResponse))]
  public partial class ModelJsonContext : JsonSerializerContext
  {
    public static ModelJsonContext Get()
    {
      return new ModelJsonContext(new JsonSerializerOptions()
      {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        PropertyNamingPolicy = new SnakeCase(),
        Converters =
        {
          new JsonStringEnumConverter()
        }
      });
    }
  }
}
