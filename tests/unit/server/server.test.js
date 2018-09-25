const axios = require('axios');


  describe('Test /artist/:id', () => {

    test('Should receive artist 1 object ', async () => {
      try {
        const {data} = await axios.get('http://localhost:3003/artist/id', {
          params: { id: 1 }
        });

        expect(data).toHaveProperty('name');
        expect(typeof data.name === 'string').toBeTruthy();

        expect(data).toHaveProperty('id');
        expect(typeof data.id === 'number').toBeTruthy();

        // Test content of albums

        expect(data).toHaveProperty('albums');
        expect(Array.isArray(data.albums)).toBeTruthy();
        expect(data.albums.length === 3).toBeTruthy();

        expect(data.albums[0]).toHaveProperty('id');
        expect(typeof data.albums[0].id === 'number').toBeTruthy();

        expect(data.albums[0]).toHaveProperty('name');
        expect(typeof data.albums[0].name === 'string').toBeTruthy();

        expect(data.albums[0]).toHaveProperty('publish');
        expect(typeof data.albums[0].publish === 'number').toBeTruthy();

        expect(data.albums[0]).toHaveProperty('img');
        expect(typeof data.albums[0].img === 'string').toBeTruthy();

        expect(data.albums[0]).toHaveProperty('songs');
        expect(Array.isArray(data.albums[0].songs)).toBeTruthy();

        // Test content of songs

        expect(data.albums[0]).toHaveProperty('songs');
        expect(Array.isArray(data.albums[0].songs)).toBeTruthy();
        expect(data.albums[0].songs.length === 10).toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('id');
        expect(typeof data.albums[0].id === 'number').toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('name');
        expect(typeof data.albums[0].name === 'string').toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('streams');
        expect(typeof data.albums[0].songs[0].streams === 'number').toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('length');
        expect(typeof data.albums[0].songs[0].length === 'number').toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('popularity');
        expect(typeof data.albums[0].songs[0].popularity === 'number').toBeTruthy();

        expect(data.albums[0].songs[0]).toHaveProperty('library');
        expect(typeof data.albums[0].songs[0].library === 'boolean').toBeTruthy();

      } catch (e) {
        throw e;
      }
    });

});

