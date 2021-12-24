using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Moq;
using NUnit.Framework;
using SpotifyAPI.Web.Http;

namespace SpotifyAPI.Web.Tests
{ 
  public class SystemTextTests
  {
    public static IEnumerable<object> DontSerializeTestSource
    {
      get
      {
        yield return new TestCaseData(null);
        yield return new TestCaseData("string");
        yield return new TestCaseData(new MemoryStream(Encoding.UTF8.GetBytes("string")));
        yield return new TestCaseData(new StringContent("string"));
      }
    }

    [TestCaseSource(nameof(DontSerializeTestSource))]
    public void SerializeRequest_SkipsAlreadySerialized(object input)
    {
      var serializer = new TextJsonSerializer();
      var request = new Mock<IRequest>();
      request.SetupGet(r => r.Body).Returns(input);

      serializer.SerializeRequest(request.Object);

      Assert.AreEqual(input, request.Object.Body);
    }

    [TestCase]
    public void DeserializeResponse_SkipsNonJson()
    {
      var serializer = new TextJsonSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns("hello");
      response.SetupGet(r => r.ContentType).Returns("media/mp4");

      IAPIResponse<object> apiResonse = serializer.DeserializeResponse<object>(response.Object);
      Assert.AreEqual(apiResonse.Body, null);
      Assert.AreEqual(apiResonse.Response, response.Object);
    }

    [TestCase]
    public void DeserializeResponse_HandlesJson()
    {
      var serializer = new TextJsonSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns("{\"hello_world\": false}");
      response.SetupGet(r => r.ContentType).Returns("application/json");

      IAPIResponse<TestResponseObject> apiResonse = serializer.DeserializeResponse<TestResponseObject>(response.Object);
      Assert.AreEqual(apiResonse.Body?.HelloWorld, false);
      Assert.AreEqual(apiResonse.Response, response.Object);
    }

    [TestCase]
    public void DeserializeResponse_TestMessage()
    {
      var serializer = new TextJsonSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns(ExampleResponses.CurrentlyPlayingContext);
      response.SetupGet(r => r.ContentType).Returns("application/json");

      IAPIResponse<CurrentlyPlayingContext> apiResonse = serializer.DeserializeResponse<CurrentlyPlayingContext>(response.Object);

      Assert.AreEqual(apiResonse.Response, response.Object);
    }

    [TestCase]
    public async Task DeserializeResponse_TimeCurrentlyPlayingTestMessage()
    {
      var serializer = new TextJsonSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns(ExampleResponses.CurrentlyPlayingContext);
      response.SetupGet(r => r.ContentType).Returns("application/json");

      var times = new List<long>();
      foreach(var iter in Enumerable.Range(0, 50))
      {
        var watch = System.Diagnostics.Stopwatch.StartNew();
        
        IAPIResponse<CurrentlyPlayingContext> apiResonse = serializer.DeserializeResponse<CurrentlyPlayingContext>(response.Object);

        watch.Stop();
        times.Add(watch.ElapsedMilliseconds);

        Assert.AreEqual(apiResonse.Response, response.Object);
      }

      var mean = times.Sum() / 50;

      using StreamWriter file = new("system.text.json_test.txt", append: true);
      await file.WriteLineAsync($"CurrentlyPlayingContext: {mean}ms");
      
    }

    [TestCase]
    public async Task DeserializeResponse_TimeUserTestMessage()
    {
      var serializer = new TextJsonSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns(ExampleResponses.PublicUser);
      response.SetupGet(r => r.ContentType).Returns("application/json");

      var times = new List<long>();
      foreach (var iter in Enumerable.Range(0, 50))
      {
        var watch = System.Diagnostics.Stopwatch.StartNew();

        IAPIResponse<PublicUser> apiResonse = serializer.DeserializeResponse<PublicUser>(response.Object);

        watch.Stop();
        times.Add(watch.ElapsedMilliseconds);

        Assert.AreEqual(apiResonse.Response, response.Object);
      }

      var mean = times.Sum() / 50;

      using StreamWriter file = new("system.text.json_test.txt", append: true);
      await file.WriteLineAsync($"User: {mean}ms");

    }
  }
}
