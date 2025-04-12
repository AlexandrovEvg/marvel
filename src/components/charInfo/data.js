let obj = {
  data: {
    results: [
      {
        id: 1,
        name: 'Iron Man',
        description:
          'Genius inventor and billionaire Tony Stark in a powered armor suit.',
        thumbnail: {
          path: 'https://www.wallpaperflare.com/static/264/707/824/iron-man-the-avengers-robert-downey-junior-tony-wallpaper',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/iron-man-tony-stark' },
          { url: 'https://en.wikipedia.org/wiki/Iron_Man' },
        ],
        comics: { items: ['Iron Man #1', 'Avengers #1'] },
      },
      {
        id: 2,
        name: 'Captain America',
        description: 'Steve Rogers, a super-soldier and symbol of freedom.',
        thumbnail: {
          path: 'https://images.hdqwalls.com/wallpapers/avengers-4-captain-america-4k-5r',
          extension: 'jpg',
        },
        urls: [
          {
            url: 'https://www.marvel.com/characters/captain-america-steve-rogers',
          },
          { url: 'https://en.wikipedia.org/wiki/Captain_America' },
        ],
        comics: { items: ['Captain America #1', 'Avengers #1'] },
      },
      {
        id: 3,
        name: 'Thor',
        description:
          'The Asgardian god of thunder wielding the mighty hammer Mjolnir.',
        thumbnail: {
          path: 'https://i0.wp.com/www.heyuguys.com/images/2013/10/2013_thor_the_dark_world-widescreen_wallpapers',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/thor-thor-odinson' },
          { url: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)' },
        ],
        comics: { items: ['Thor #1', 'Avengers #1'] },
      },
      {
        id: 4,
        name: 'Hulk',
        description: 'Bruce Banner transforms into a green giant when angry.',
        thumbnail: {
          path: 'https://static.printler.com/cache/e/9/4/b/b/2/e94bb2c6a384b0123f55d2f346d6390ee1fc980b',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/hulk-bruce-banner' },
          { url: 'https://en.wikipedia.org/wiki/Hulk' },
        ],
        comics: { items: ['Hulk #1', 'Avengers #1'] },
      },
      {
        id: 5,
        name: 'Black Widow',
        description:
          'Natasha Romanoff, a former spy and master martial artist.',
        thumbnail: {
          path: 'https://animationxpress.com/wp-content/uploads/2020/07/black_widow',
          extension: 'jpg',
        },
        urls: [
          {
            url: 'https://www.marvel.com/characters/black-widow-natasha-romanoff',
          },
          {
            url: 'https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)',
          },
        ],
        comics: { items: ['Black Widow #1', 'Avengers #1'] },
      },
      {
        id: 6,
        name: 'Falcon',
        description:
          'Sam Wilson, partner of Captain America with mechanical wings.',
        thumbnail: {
          path: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/teaser_image/blog_entry/2025-02/av%20%2325%20cap%20cover',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/falcon-sam-wilson' },
          { url: 'https://en.wikipedia.org/wiki/Falcon_(comics)' },
        ],
        comics: { items: ['Falcon #1', 'Avengers #2'] },
      },
      {
        id: 7,
        name: 'Scarlet Witch',
        description: 'Wanda Maximoff, possessing powerful magical abilities.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/disney/images/3/36/Profile_-_Scarlet_Witch',
          extension: 'png',
        },
        urls: [
          {
            url: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
          },
          { url: 'https://en.wikipedia.org/wiki/Scarlet_Witch' },
        ],
        comics: { items: ['Scarlet Witch #1', 'Avengers #2'] },
      },
      {
        id: 8,
        name: 'Vision',
        description: 'A synthetic android with human emotions.',
        thumbnail: {
          path: 'https://hips.hearstapps.com/hmg-prod/images/vision-wandavision-vivo-o-muerto-1610472596',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/vision' },
          { url: 'https://en.wikipedia.org/wiki/Vision_(Marvel_Comics)' },
        ],
        comics: { items: ['Vision #1', 'Avengers #2'] },
      },
      {
        id: 9,
        name: 'Black Panther',
        description: "T'Challa, the king of Wakanda and its protector.",
        thumbnail: {
          path: 'https://media.newyorker.com/photos/5a87650156b75c08a3e5bbb6/16:9/w_1280,c_limit/Cobb-Black-Panther',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/black-panther-t-challa' },
          { url: 'https://en.wikipedia.org/wiki/Black_Panther_(character)' },
        ],
        comics: { items: ['Black Panther #1', 'Avengers #3'] },
      },
      {
        id: 10,
        name: 'Spider-Man',
        description: 'Peter Parker, a teenager with spider-like abilities.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/spidermanmovies/images/8/8c/Spider-man_no_way_home_msp',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/spider-man-peter-parker' },
          { url: 'https://en.wikipedia.org/wiki/Spider-Man' },
        ],
        comics: { items: ['Spider-Man #1', 'Avengers #3'] },
      },
      {
        id: 11,
        name: 'Doctor Strange',
        description: 'Stephen Strange, the Sorcerer Supreme of Earth.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/marveldatabase/images/6/63/Stephen_Strange_%28Earth-199999%29_from_Doctor_Strange_in_the_Multiverse_of_Madness_Promo_001',
          extension: 'jpg',
        },
        urls: [
          {
            url: 'https://www.marvel.com/characters/doctor-strange-stephen-strange',
          },
          { url: 'https://en.wikipedia.org/wiki/Doctor_Strange' },
        ],
        comics: { items: ['Doctor Strange #1', 'Avengers #3'] },
      },
      {
        id: 12,
        name: 'Hawkeye',
        description: 'Clint Barton, a master archer and marksman.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5b/Hawkeye_Infobox',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/hawkeye-clint-barton' },
          { url: 'https://en.wikipedia.org/wiki/Hawkeye_(Clint_Barton)' },
        ],
        comics: { items: ['Hawkeye #1', 'Avengers #3'] },
      },
      {
        id: 13,
        name: 'Deadpool',
        description:
          'Wade Wilson, a mercenary with accelerated healing and a twisted sense of humor.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/marvelcentral/images/4/48/Deadpool_gives_his_approval',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/deadpool-wade-wilson' },
          { url: 'https://en.wikipedia.org/wiki/Deadpool' },
        ],
        comics: { items: ['Deadpool #1', 'X-Force #1'] },
      },
      {
        id: 14,
        name: 'Loki',
        description: 'The trickster god and brother of Thor.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Loki_%28Thor_Ragnarok%29',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/loki' },
          { url: 'https://en.wikipedia.org/wiki/Loki_(Marvel_Comics)' },
        ],
        comics: { items: ['Thor #2', 'Avengers #5'] },
      },
      {
        id: 15,
        name: 'Groot',
        description:
          'A tree-like alien with limited vocabulary but a big heart.',
        thumbnail: {
          path: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/1/16/Groot_textless',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/groot' },
          { url: 'https://en.wikipedia.org/wiki/Groot' },
        ],
        comics: { items: ['Guardians of the Galaxy #1', 'Infinity War #2'] },
      },
      {
        id: 16,
        name: 'Rocket Raccoon',
        description:
          'A genetically modified raccoon with exceptional tactical skills.',
        thumbnail: {
          path: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/1/18/Rocket-raccoon-has-his-very-own-guardians-of-the-galaxy-poster-preview',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/rocket' },
          { url: 'https://en.wikipedia.org/wiki/Rocket_Raccoon' },
        ],
        comics: { items: ['Guardians of the Galaxy #2', 'Infinity War #3'] },
      },
      {
        id: 17,
        name: 'Venom',
        description:
          'An alien symbiote bonded to Eddie Brock, granting him superpowers.',
        thumbnail: {
          path: 'https://images.squarespace-cdn.com/content/v1/52a86cb9e4b098a46d38a18c/1705282352294-M0F1EHU0J3JSMY4M5N1O/venom-eddie-brock',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/venom-eddie-brock' },
          { url: 'https://en.wikipedia.org/wiki/Venom_(character)' },
        ],
        comics: { items: ['Venom #1', 'Spider-Man #5'] },
      },
      {
        id: 18,
        name: 'Thanos',
        description: 'A powerful warlord seeking to balance the universe.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/Thanos_Infobox',
          extension: 'png',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/thanos' },
          { url: 'https://en.wikipedia.org/wiki/Thanos' },
        ],
        comics: { items: ['Infinity Gauntlet #1', 'Avengers #6'] },
      },
      {
        id: 19,
        name: 'Doctor Doom',
        description:
          'Victor Von Doom, ruler of Latveria and master of both science and sorcery.',
        thumbnail: {
          path: 'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2024/07/29161127/Doctor-Doom-with-energy-fist-1',
          extension: 'jpg',
        },
        urls: [
          {
            url: 'https://www.marvel.com/characters/doctor-doom-victor-von-doom',
          },
          { url: 'https://en.wikipedia.org/wiki/Doctor_Doom' },
        ],
        comics: { items: ['Fantastic Four #1', 'Secret Wars #2'] },
      },
      {
        id: 20,
        name: 'Silver Surfer',
        description: 'The cosmic herald of Galactus with the Power Cosmic.',
        thumbnail: {
          path: 'https://static.wikia.nocookie.net/marveldatabase/images/8/8c/Silver_Surfer_The_Best_Defense_Vol_1_1_Skan_Variant_Textless',
          extension: 'jpg',
        },
        urls: [
          { url: 'https://www.marvel.com/characters/silver-surfer' },
          { url: 'https://en.wikipedia.org/wiki/Silver_Surfer' },
        ],
        comics: { items: ['Silver Surfer #1', 'Infinity Gauntlet #2'] },
      },
    ],
  },
};
