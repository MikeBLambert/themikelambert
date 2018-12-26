import jeopardyScreenshot from '../../../images/portfolio/jeopardy.png';
import cryptoScreenshot from '../../../images/portfolio/crypto.png';
import nannyScreenshot from '../../../images/portfolio/nanny.png';
import memeScreenshot from '../../../images/portfolio/meme.png';
import musicMeowScreenshot from '../../../images/portfolio/music-meow.png';
import pokedexScreenshot from '../../../images/portfolio/pokedex.png';

export const projects = [
  {
    technologies: [
      'React',
      'Redux',
      'MomentJS',
      'Node',
      'Express',
      'MongoDB',
      'Jest',
    ],
    title: 'Nanny Now!',
    description:
      'An application designed to assist 3rd-party childcare placement agencies compete in a digital world. It connects families and nannies to assist with scheduling of short-term childcare/babysitting appointments.',
    url: 'https://github.com/team-party-blob/nannynow',
    screenshot: nannyScreenshot,
    alt: 'Nanny Now Screenshot',
    keyword: 'nanny',
  },

  {
    technologies: ['Node', 'Express', 'Jest', 'MongoDB'],
    title: 'Cryptocurrency Trading Simulation',
    description:
      "Using real-time market pricing, this simulation allows users to buy and sell the world's top 10 cryptocurrencies (by market capitalization) and compete for status as the top trader.",
    url: 'https://github.com/MikeBLambert/cryptokeeper-server',
    screenshot: cryptoScreenshot,
    alt: 'Cryptocurrency Simulation Screenshot',
    keyword: 'crypto',
  },

  {
    technologies: ['Vue', 'Node', 'Express', 'PostgreSQL'],
    title: 'Jeopardy For Educators',
    description:
      'A teaching tool for instructors at any level who want to bring a fun game designed to aid student learning. Inspired by Jeopardy, Jeopardy For Educators allows the user to create a board specific to their needs. The user is able to search our database of over 300,000 Jeopardy questions as well as create their own.',
    url: 'https://github.com/MikeBLambert/jeopardy_for_teachers_app',
    screenshot: jeopardyScreenshot,
    alt: 'Jeopardy for Educators screenshot',
    keyword: 'jeopardy',
  },

  {
    technologies: ['React', 'Webpack'],
    title: 'Meme Generator',
    description:
      'This application allows users to upload their own screenshots and add text at the top and bottom of the image in multiple colors.',
    url: 'https://github.com/MikeBLambert/meme-generator',
    screenshot: memeScreenshot,
    alt: 'Meme screenshot',
    keyword: 'meme',
  },
  {
    technologies: ['React', 'Jest'],
    title: 'Music Meow',
    description:
      "This application allows users to search for any artist in the MusicBrainz database and then see the full lyrics of any of that artist's songs. The lyrics are accessed via the Lyrics.ovh API.",
    url: 'https://github.com/MikeBLambert/artist-search',
    screenshot: musicMeowScreenshot,
    alt: 'Music Meow screenshot',
    keyword: 'musicMeow',
  },
  {
    technologies: ['Vue'],
    title: 'Pokedex',
    description:
      'Using a dataset of over 800 Pokemon, this application applies sorting and filtering to dynamically show/hide Pokemon based upon user input.',
    url: 'https://github.com/MikeBLambert/pokedex',
    screenshot: pokedexScreenshot,
    alt: 'Pokedex screenshot',
    keyword: 'pokedex',
  },
];
