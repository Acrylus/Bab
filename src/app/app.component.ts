import { Component } from '@angular/core';

type StorySlide = {
  kind: 'photo' | 'video' | 'poem';
  src: string;
  alt: string;
  chapter: string;
  caption: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly callSign = 'Bab';
  readonly themeSong = {
    title: 'Always',
    artist: 'Atlantic Starr',
    searchUrl: 'https://open.spotify.com/search/Atlantic%20Starr%20Always',
  };
  readonly soundtrackUrl = '/img/music/Always.mp3';
  readonly heroImage = '/img/background/Messenger_creation_1B53959A-155F-4019-857A-A580BA5A02A2.jpeg';
  readonly coverImage = '/img/her/Messenger_creation_BFBD835E-D422-48F5-9CA9-E3D0345A5A74.jpeg';
  readonly replyPoemUrl = '/img/us/poembyme.png';
  readonly poemStartIndex = 9;
  readonly poemPages = [1, 2, 3, 4, 5];
  readonly slides: StorySlide[] = [
    {
      kind: 'photo',
      src: this.coverImage,
      alt: 'Divis smiling with a bouquet of flowers and a pink heart pillow',
      chapter: 'For you, Bab',
      caption: 'Your smile, your flowers, and one of my favorite pictures of you.',
    },
    {
      kind: 'photo',
      src: '/img/her/Messenger_creation_B3BC6CCC-265E-4F4D-BC86-DA4AC1C9268D.png',
      alt: 'Divis wearing Anton’s jersey',
      chapter: 'The little things',
      caption: 'My favorite person, wearing my jersey.',
    },
    {
      kind: 'photo',
      src: '/img/her/Messenger_creation_0739A616-9B81-4647-BEBD-147C12BF410D.jpeg',
      alt: 'A favorite photo of Divis',
      chapter: 'The little things',
      caption: 'A little moment I want to keep close.',
    },
    {
      kind: 'photo',
      src: '/img/us/20260830_133728.jpg',
      alt: 'A favorite photo of Divis and Anton together',
      chapter: 'The little things',
      caption: 'A favorite frame from our story so far.',
    },
    {
      kind: 'photo',
      src: '/img/her/Messenger_creation_3AED4F28-B570-4031-A9EB-53B8E9622E69.jpeg',
      alt: 'A favorite memory of Divis',
      chapter: 'The little things',
      caption: 'Another favorite frame from our story.',
    },
    {
      kind: 'photo',
      src: '/img/memories/firstdate.jpeg',
      alt: 'A memory from Divis and Anton’s first date',
      chapter: 'The little things',
      caption: 'Back to where our story began: our first date.',
    },
    {
      kind: 'photo',
      src: '/img/memories/20260913_010625.jpg',
      alt: 'A September memory of Divis and Anton',
      chapter: 'The little things',
      caption: 'Another little piece of our story.',
    },
    {
      kind: 'photo',
      src: '/img/memories/20260912_213949.jpg',
      alt: 'A September memory of Divis and Anton',
      chapter: 'The little things',
      caption: 'A moment worth keeping close.',
    },
    {
      kind: 'photo',
      src: '/img/memories/3.jpg',
      alt: 'Divis and Anton holding hands',
      chapter: 'Always close',
      caption: 'Even across the miles, I’m holding your hand.',
    },
    ...Array.from({ length: 5 }, (_, page): StorySlide => ({
      kind: 'poem',
      src: `/img/poem/page${page + 1}.jpeg`,
      alt: `Page ${page + 1} of Divis's poem, Salamat Sa Tanan`,
      chapter: 'The day you said yes',
      caption: page === 0
        ? 'Salamat Sa Tanan. The poem you wrote when our story became ours.'
        : `Salamat Sa Tanan · page ${page + 1} of 5`,
    })),
    {
      kind: 'poem',
      src: this.replyPoemUrl,
      alt: 'Anton’s poem, Beautiful Direction, written in reply to Divis',
      chapter: 'Beautiful Direction',
      caption: 'Beautiful Direction. My little answer to your poem.',
    },
  ];

  currentIndex = 0;
  isSlideshowOpen = false;

  get currentSlide(): StorySlide {
    return this.slides[this.currentIndex];
  }

  openSlideshow(startIndex = 0): void {
    this.currentIndex = startIndex;
    this.isSlideshowOpen = true;
  }

  closeSlideshow(): void {
    this.isSlideshowOpen = false;
  }

  previousSlide(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  nextSlide(): void {
    if (this.currentIndex === this.slides.length - 1) {
      this.closeSlideshow();
      return;
    }

    this.currentIndex += 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}