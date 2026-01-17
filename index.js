export default [
  {
    id: "hayase-test-source",
    name: "Hayase Test Source",
    type: "torrent",

    async search(query) {
      return [
        {
          id: "test-1",
          title: "Test Anime Entry",
          magnet: "magnet:?xt=urn:btih:0123456789ABCDEF0123456789ABCDEF01234567",
          seeders: 1,
          leechers: 0,
          size: 0
        }
      ];
    }
  }
];
