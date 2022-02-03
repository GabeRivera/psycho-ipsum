import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private sentences: string[] = [
    'They don’t have a good bathroom to do coke in.',
    'You’ll notice that my friends and I all look and behave in a remarkably similar fashion, but there are subtle differences between us. McDermott is the biggest asshole. Van Patten is the yes man. Price is the most wired. I\'m the best looking. We all have light tans. Right now I’m in a bad mood because this is not a good table, and Van Patten keeps asking dumb, obvious questions about how to dress.',
    'Oh my God. Bateman, do you want me to fry you up some potato pancakes? Some latkes? No. Just cool it with the anti-Semitic remarks. Oh I forgot. Bateman’s dating someone from the ACLU.',
    'I\'m not sure, guy, but I don\'t think dyslexia is a virus. Oh, who knows? They don\'t know that. Prove it.',
    'Could you keep it down, I\'m trying to do drugs! Sorry, dude. Steroids...Okay, let\'s do it.',
    'My name is Patrick Bateman. I am twenty-six years old. I live in the American Garden Buildings on West Eighty-First Street, on the eleventh floor Tom Cruise lives in the penthouse.',
    'I believe in taking care of myself, in a balanced diet, in a rigorous exercise routine. In the morning, if my face is a little puffy, I’ll put on an ice pack while doing my stomach crunches. I can do a thousand now.',
    'There is an idea of a Patrick Bateman, some kind of abstraction, hut there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping you and maybe you can even sense our lifestyles are probably  comparable: I simply am not there.',
    'It is hard for me to make sense on any given level. My self is fabricated, an aberration. My personality is sketchy and unformed, my heartlessness goes deep and is persistent. My conscience, my pity, my hopes disappeared a long time ago, if they ever did exist.',
    'No. No. Be a doll and just get me a Perrier, okay?',
    'I’d want a zydeco band, Patrick. That’s what I’d want, a zydeco band. Or mariachi. Or reggae. Something ethnic to shock Daddy Oh, I can\'t decide... And lots of chocolate truffles. Godiva. And oysters on the half-shell.',
    'I’m trying to listen to the new George Michael tape but Evelyn, my supposed fiancée, keeps buzzing in my ear.',
    'Your father practically owns the company. You can do anything you like, silly.',
    'I’m on the verge of tears by the time we arrive at Espace since I’m positive we won’t have a decent table, but we do, and relief washes over me in an awesome wave.',
    'I am fairly sure that Timothy and Evelyn are having an affair. Timothy is the only interesting person I know. Courtney is almost perfect looking. She’s usually operating on one or more psychiatric drugs. Tonight I believe it’s Xanax. More disturbing than her drug use, though, is the fact that she\'s engaged to Luis Carruthers, the biggest dufus in the business.',
    'Courtney, you’re going to have the peanut butter soup with smoked duck and mashed squash. New York magazine called it a “playful but mysterious little dish.\" You\'ll love it. And then... the red snapper with violets and pine nuts. I think that’ll follow nicely.',
    'Allen has mistaken me for this dork Marcus Halberstam. It seems logical because Marcus also works at P&P and in fact does the same exact thing I do and he also has a penchant for Valentino suits and Oliver Peoples glasses. Marcus and I even go to the same barber, although I have a slightly better haircut.',
    'New card. What do you think? Whoa. Very nice. Take a look. Good coloring. That’s bone. And the lettering is something called Silian Rail. Jesus. This is really super. How’d a nitwit like you get so tasteful? I can\'t believe that Price prefers McDermott’s card to mine. Look at that subtle off-white coloring. The tasteful thickness of it. Oh my God, it even has a watermark...',
    'I have all the characteristics of a human being… flesh, blood, skin, hair… but not a single clear, identifiable emotion except for greed, and disgust. Something horrible is happening inside me and I don’t know why. My nightly bloodlust has overflowed into my days. I feel lethal, on the verge of frenzy.',
    'We should’ve gone to Dorsia. I could’ve gotten us a table. Nobody goes there anymore.',
    'So, wasn’t Rothschild originally handling the Fisher account? How did you get it? I could tell you that, Halberstam, but then I’d have to kill you.',
    'You like Huey Lewis and the News? Their early work was a little too New Wave for my taste. But then Sports came out in 1983, I think they really came into their own, commercially and artistically. The whole album has a clear, crisp sound and a new sheen of consummate professionalism that gives the songs a big boost. He’s been compared to Elvis Costello but I think Huey has a more bitter, cynical sense of humor. In 1987 Huey released this, Fore!, their most accomplished album. I think I heir undisputed masterpiece is \"HiP To Be Square,\" a song so catchy that most people probably don’t listen to the lyrics. But they should because it’s not just about the pleasures of conformity and the importance of trends. It’s a personal statement about the band itself.',
    'You’ll have to excuse me. I have a lunch meeting with Cliff Huxtable at Four Seasons in twenty minutes.',
    'Do you like Phil Collins? I’ve been a big Genesis fan ever since the release of their 1980 album, Duke. Before that I really didn’t understand any of their work. It was too artsy, too intellectual. It was on Duke where Phil Collins’ presence became more apparent. I think \"Invisible Touch\" is the group’s undisputed masterpiece. It’s an epic meditation on intangibility, at the same time it deepens and enriches the meaning of the preceding three albums. Listen to the brilliant ensemble playing of Banks, Collins and Rutherford. You can practically hear every nuance of every instrument. In terms of lyrical craftsmanship and sheer songwriting, this album hits a new peak of professionalism. Take the lyrics to \"Land of Confusion.\" In this song, Phil Collins addresses the problem of abusive political authority. \"In Too Deep\" is the most moving pop song of the 1980s about monogamy and commitment. The song is extremely uplifting. Their lyrics are as positive and affirmative as anything I\'ve heard in rock. Phill Collins solo efforts seem to be more commercial and therefore more satisfying in a narrower way, especially songs like \"In the Air Tonight\" and \"Against All Odds.\" But I also think that Phill Collins works better within the confines of the group than as a solo artist-and I stress the word artist. This is \"Sussudio,\" a great, great song, a personal favorite.',
    'Is this tap water? I don’t drink tap water Bring me an Evian or something, okay?',
    'I\'ve gotta… I’ve gotta… return some videotapes.',
    'Someone has to get the Bolivian marching powder. You went last time. Stay here.',
    'God… I guess… I was probably returning videotapes.',
    'We had… gone to a new musical called… Oh Africa, Brave Africa. It was… a laugh riot… and that\'s about it. I think we had dinner at Orso’s. No, Petaluma. No, Orso’s. The… last time I physically saw him was… at an automated teller. I can’t remember which… just one that was near, um, Nell’s.’,  \'Where do you summer? Southampton?',
    'Did you know that Whitney Houston’s debut LP called simply Whitney Houston had four number-one singles on it? Did you know that, Christie? Whitney’s voice leaps across so many boundaries and is so versatile, though she’s mainly a jazz singer, it’s hard to take in the album on a first listening. It’s hard to choose a favorite track among so many great ones, but \"The Greatest Love of All\" is one of the best, most powerful songs ever written about self-preservation and dignity. It’s universal message crosses all boundaries, and instills one with the hope that it’s not too late to better ourselves. to act kinder. Since, Elizabeth, it\'s impossible in the world we live in to empathize with others, we can always empathize with ourselves. It’s an important message, crucial, really, and it’s beautifully stated on the album.',
    'I think, Evelyn, that we’ve… lost touch. My need to engage in homicidal behavior on a massive scale cannot be, um, corrected, but I have no other way to fulfill my needs. This is no joke. I don’t think we should see each other anymore. I know that your friends are my friends. I\'ve thought about that. You can have them.',
    'I’m…in touch with humanity. Evelyn, I’m sorry. You’re just not terribly important to me.',
    'I’m just leaving. I have to return some videotapes.',
    'Harold, it’s Bateman. Patrick Bateman. You’re my lawyer so I think you should know, I’ve killed a lot of people. Some escort girls, in an apartment uptown, some homeless people, maybe five or ten, an NYU girl I met in Central Park. I left her in a parking lot, near Dunkin’ Donuts. I killed Bethany, my old girlfriend, with a nail gun… and a man, some old bum with a dog. Last week I killed another girl with a chainsaw… I had to, she almost got away. There was someone else there, maybe a model, I can\'t remember but she’s dead too. And Paul Allen. I killed Paul Allen with an ax, in the face. His body is dissolving in a bathtub in Hell’s Kitchen. I don’t want to leave anything out here... I guess I’ve killed 20 people, maybe 40… I have tapes of a lot of it. Some of the girls have seen the tapes, I even… well, I ate some of their brains and I tried to cook a little. Tonight I just, well, I had to kill a lot of people and I’m not sure I’m going to get away with it this time, I mean I guess I’m a pretty sick guy. So, if you get back tomorrow, I may show up at Harry’s Bar, so, you know, keep your eyes open.',
    'Personally I think the guy went a little nutso. Split town for a while. Maybe he did go to London. Sightseeing. Drinking. Whatever. Anyway, I’m pretty sure he’ll turn up sooner or later. I mean, to think that one of his friends killed him, for no reason whatsoever would be too ridiculous. Isn’t that right, Patrick? ',
    'Hey, look… Price is back. And he’s drinking Perrier. He’s a changed man. Except...he still can’t get a reservation to save his life.',
    'Face it, the Japanese will own most of this country by the end of the ’90s. Shut up, Carnes, they will not.'
  ];

  constructor() { }

  getRandomSentence(): string {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }

  getParagraph(): string {
    const minCharLength = 250;
    let paragraph = '';
    let firstSentence = true;
    while (paragraph.length < minCharLength) {
      if (firstSentence) {
        paragraph = paragraph.concat(this.getRandomSentence());
        firstSentence = false;
      } else {
        paragraph = paragraph.concat(' ' + this.getRandomSentence());
      }
    }
    return paragraph;
  }

  generate(desiredParagraphs: number): string {
    const allParagraphs = [];

    while (allParagraphs.length < desiredParagraphs) {
      allParagraphs.push(this.getParagraph());
    }
    let paragraphHTML = '';
    allParagraphs.forEach((p) => paragraphHTML += `<p>${ p }</p>`);

    return paragraphHTML;
  }
}
