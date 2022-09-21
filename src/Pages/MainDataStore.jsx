import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    // Bollywood
    {
      "id": 1,
      "title": "Tanhaji - The Unsung Warrior",
      "Image": "https://th.bing.com/th/id/OIP.79FhRnDI4vvgOquPfMBk-gHaFl?w=243&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "bollywood",
      "description": "Born in south Mumbai, Kapoor is the second son of film director and actor Raj Kapoor. He did his schooling with his brothers at Mumbai's Campion School. His brothers are well-known actors, Randhir Kapoor and Rajiv Kapoor. Rishi Kapoor debuted in his father's 1970 film Mera Naam Joker, playing his father's role as a child. Rishi Kapoor had his first lead role opposite Dimple Kapadia in the popular 1973 film Bobby which became an instant hit among youngsters. He made a popular pairing with future wife Neetu Singh in 1974-1981 but the pair was successful only in films with big casts, since films with Rishi as the lead - like Zehreela Insaan, Zinda Dil, Doosara Aadmi, Anjane Mein, Jhoota Kahin Ka, Dhan Daulat - were box office flops. Rishi Neetu pair was successful in multi-star films like Khel Khel Mein, Kabhie Kabhie, Amar Akbar Anthony, Pati Patni Aur Woh, Duniya Meri Jeb Mein.",
       "info":"Born in south Mumbai, Kapoor is the second son of film director and actor Raj Kapoor. He did his schooling with his brothers at Mumbai's Campion School. His brothers are well-known actors, Randhir Kapoor and Rajiv Kapoor. Rishi Kapoor debuted in his father's 1970 film Mera Naam Joker, playing his father's role as a child. Rishi Kapoor had his first lead role opposite Dimple Kapadia in the popular 1973 film Bobby which became an instant hit among youngsters. He made a popular pairing with future wife Neetu Singh in 1974-1981 but the pair was successful only in films with big casts, since films with Rishi as the lead - like Zehreela Insaan, Zinda Dil, Doosara Aadmi, Anjane Mein, Jhoota Kahin Ka, Dhan Daulat - were box office flops. Rishi Neetu pair was successful in multi-star films like Khel Khel Mein, Kabhie Kabhie, Amar Akbar Anthony, Pati Patni Aur Woh, Duniya Meri Jeb Mein."
    },
    {
      "id": 2,
      "title": "Pushpa: The Rise – Part 01 ",
      "Image": "https://1.bp.blogspot.com/-w_t7B6a4kEo/XtYEcM3GtcI/AAAAAAAAAXA/cMeSQb5-kUQbepvfKOemcxdT8EgEx9JIgCLcBGAsYHQ/s1600/XEjdr8gMgvImaxresdefault.jpg",
      "category": "Bollywood",
      "Release" : " Release Date : January 7, 2022 ",
      "description": "IMDb Rating : 7.6 / 10",
      
    },
    {
      "id": 3,
      "title": "K.G.F - Chapter 1",
      "Image": "https://pbs.twimg.com/media/DoQavANUUAAtD8y.jpg",
      "category": "Bollywood",
      "Release" : " Release Date : April 14, 2022 ",
      "description": "IMDb Rating : 8.6 / 10"
    },
    {
      "id": 4,
      "title": "Baahubali : The Beginning",
      "Image": "https://th.bing.com/th/id/R.7d80e70053edb900344c59c8cf9bacd5?rik=HBMxu7Jz%2bvExgQ&riu=http%3a%2f%2fvolganga.com%2fwordpress%2fwp-content%2fuploads%2f2015%2f07%2fBahubali_2015_movie_HD_wallpapers_02.jpg&ehk=wfxVVopR9e1pa5WeHn2%2fOdkwONX0LAbWUb9cE5KsGXE%3d&risl=&pid=ImgRaw&r=0",
      "category": "Bollywood",
      "Release" : " Release Date : April 19, 2017 ",
      "description": "IMDb Rating : 8.1 / 10"
    },
    {
      "id": 5,
      "title": "RRR",
      "Image": "https://th.bing.com/th/id/OIP.UKmM3x4U9yocNlaMdWEYhgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "Bollywood",
      "Release" : " Release Date : Octomber 25, 2021 ",
      "description": "IMDb Rating : 8.0 / 10"
    },
    {
      "id": 6,
      "title": "Bajirao Mastani",
      "Image": "https://th.bing.com/th/id/OIP.X9H8uWOw-lsg_Dww7wX7SwHaEK?w=325&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "Bollywood",
      "Release" : " Release Date : January 7, 2020 ",
      "description": "IMDb Rating : 8.3 / 10"
    },
    
    // Mix
    {
      "id": 7,
      "title": "Shershah Upcoming movie",
      "Image": "https://th.bing.com/th/id/OIP.wjN-b-aVDrad-VH8BdocYgHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "mix",
      "description": "Ever since the movie, Shershaah was released, Kiara Advani and Sidharth Malhotra's massive fanbase has been rooting for them to become a couple and announce their relationship to the world. However, even though the duo has been dating for quite some time, none of them has spoken about it in front of the media. But, their social media PDAs, public outings and dinner dates show how much they are in love with each other.However, a few days back, rumours were rife that Sidharth and Kiara had parted ways for reasons best known to them. A source close to the couple had even mentioned to the media that they had fallen out of love and wouldn't meet each other anymore. The news about their breakup had devastated their fans. But, when Sidharth Malhotra had gone for Kiara's Bhool Bhulaiya 2 screening, their cute love-filled gestures had won our hearts, and everyone had wondered whether everything was fine between them."
    },
    {
      "id": 8,
      "title": "The World Goes Towards New Technology",
      "Image": "https://th.bing.com/th/id/OIP.5fOMbKN54vHEBvVD4wYtQwHaE8?pid=ImgDet&rs=1",
      "category": "mix",
      "description": "In a scene just before Amazon Prime’s Samaritan climaxes, the protagonist played by a worn and visibly old Sylvester Stallone tells an exuberant kid “The things is there is good and bad inside each one of us”. It is a rather declarative way of ending a film but given the film’s late narrative twist, it is also a neatly pulled-off message. But cinema isn’t just the messaging, but also the craft of leading you through a journey that makes the message palatable, even if unexpected. In Samaritan, no such thing happens as a film ripe with promise and casted perhaps to perfection, meanders pointlessly before turning around at the end, to reveal it had bright ideas all along, just not the tools to design a decent story around it. It is decent rescue act, loaded with an interesting moral quandary, but it appears in quantity far little, far too late.Samaritan is the story of the most obviously named white guy from Atlantic City – Joe Smith. Smith picks up garbage, wears a hoodie and keeps to himself. He is also an old man, an aspect of his character that the film does a poor job of exploring. Joe’s life is pre-dated by a famous feud between two superheroes –  the good one being Samaritan and the bad one called Nemesis. A fight to the end, we are told in the prologue, ended with the death of Nemesis. Samaritan has since gone missing too. Of course it has been clear all along, ever since the trailer for the film released that Stallone is the superhero out of commission. His withdrawal from playing saviour, however, isn’t exactly fleshed as much as it is argued over with the diction of someone who has just found what research is."
    },
    {
      "id": 9,
      "title": "HP is Going To Launch New Laptop",
      "Image": "https://th.bing.com/th/id/OIP.HvAm7y64xPV_Ec1czU0d6AHaEn?w=279&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "mix",
      "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
    },
    {
      "id": 10,
      "title": "Should yoga done on an empty stomach?",
      "Image": "https://elcomercio.pe/resizer/wyWyM0ko2xtaSKDo8-7OW7Z-nvo=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Y3OMKEZWBNHLDFEPJYGDPTXUFE.png",
      "category": "mix",
      "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
    },
    {
      "id": 11,
      "title": "These Harmless foods for Cancer Patients",
      "Image": "https://th.bing.com/th/id/OIP.-NChnno_sC5oN6O706SpRgHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "category": "mix",
      "description": "he nutrition needs of people with cancer vary from person to person. Your cancer care team can help you identify your nutrition goals and plan ways to help you meet them.Eating well while you’re being treated for cancer would help you: 1) Feel better2) Keep up your strength and energy3) Maintain your weight and your body’s store of nutrient4) Better tolerate treatment related side effects 5) Lower your risk of infections6) Heal and recover fasterEating well means eating a variety of foods to get the nutrients your body needs to fight cancer. These nutrients include proteins, fats, carbohydrates, water, vitamins, and minerals. "
    },
 
    // Hollywood
    {
    "id": 12,
    "title": "Pirates of the Caribbean",
    "Image": "https://th.bing.com/th/id/R.501e849ce3b4ac3756c5d105ae4ff154?rik=eIboDE%2bQkR%2f%2bWg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f3%2fd%2f573092.jpg&ehk=rxHQfBNQTSdIhcKIa7UQCRGPCKm35gZBDcykwHe%2fBno%3d&risl=&pid=ImgRaw&r=0",
    "category": "Hollywood",
    "Release" : " Release Date : January 7, 2022 ",
    "description": "IMDb Rating : 7.6 / 10"
  }, 
  {
    "id": 13,
    "title": "Money Heist",
    "Image": "https://img.starbiz.com/resize/750x-/2020/05/16/money-heist-download-2-7bd1.jpg",
    "category": "Hollywood",
    "Release" : " Release Date : January 7, 2022 ",
      "description": "IMDb Rating : 7.6 / 10"
  },
  {
    "id": 14,
    "title": "The Avengers",
    "Image": "https://wallpapercave.com/wp/y5qI6aT.jpg",
    "category": "Hollywood",
    "Release" : " Release Date : January 7, 2022 ",
    "description": "IMDb Rating : 7.6 / 10"
  },
  {
    "id": 15,
    "title": "Spider-Man: No Way Home",
    "Image": "https://th.bing.com/th/id/R.98b095fd41e49bd262013eb2c125f8e5?rik=Q6QVC7PivYb79w&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f09%2f53839-Spider-Man-movies-The_Amazing_Spider-Man.jpg&ehk=UO5FOZarTTTwucjcfeRFeCsJ1zJgcC5wVwwMayCiJ0k%3d&risl=&pid=ImgRaw&r=0",
    "category": "Hollywood",
    "Release" : " Release Date : January 7, 2022 ",
      "description": "IMDb Rating : 7.6 / 10"
  },
  {
    "id": 16,
    "title": "Jumanji - The Next Level ",
    "Image": "https://th.bing.com/th/id/OIP.rvOq2j2t3KT-5cUNgx5cIgHaEO?w=304&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Hollywood",
    "Release" : " Release Date : January 7, 2022 ",
    "description": "IMDb Rating : 7.6 / 10"
  },

  // footer
  {
    "id": 17,
    "title": "Deepika Padukone ",
    "Image": "https://th.bing.com/th/id/OIP.-pG90TiROI9aZ5F3_DNx5wHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "footer1",
    "description": "Deepika Padukone made her debut in 2002 with the Bollywood film Thamizhan. Then in 2003 she debuted in Bollywood with the film, The Hero: Love Story of a Spy. It was the highest-grossing film of the year. Then she appeared in the film Andaaz which was a success at the box office. For this film, she won the Filmfare Best Female Debut Award and a nomination for the Filmfare Best Supporting Actress Award.Then in 2004 she starred in films like Plan, Kismat and Asambhav which did not do very well at the box office. Later that year she acted in a movie called Mujhse Shaadi Karogi which was the third highest-grossing film of that year. Then she starred in Aitraaz where she played a negative role. It was a hit movie and she received the Filmfare Best Villain Award for playing the role. She also received a second nomination for the Filmfare Best Supporting Actress Award.In the year 2005, she had six flops, including Blackmail, Karam, Yakeen and Barsaat. After this she acted in two films, Waqt: The Race Against Time and Bluffmaster which went well at the box office. Then in 2006, she starred in two successful films, Krrish and Don - The Chase Begins Again. In the year 2007 she acted in two more films, Salaam-e-Ishq: A Tribute To Love and Big Brother which flopped at the box office."
  },
  {
    "id": 18,
    "title": "Comming New Car Models Soon",
    "Image": "https://th.bing.com/th/id/OIP.ukR9HN80FRh8q6NjfGBM2QHaEm?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "footer2",
    "description": "After impressing fans and critics alike with her role of Hannah Baker, a troubled teenager in Netflix’s hit series 13 Reasons Why — a show that put the spotlight on mental health issues, bullying and gun violence —  Katherine Langford has only climbed the stairs of stardom.The Knives Out actor, who is currently attending the 75th Festival de Cannes in France, recently spoke with indianexpress.com ahead of her red carpet debut at the French Riviera. Her first look was a glittery custom Prada gown for the screening of Final Cut (Coupez!). Styled by Molly Dickson, Langford’s ensemble featured silver sequins and a sweeping train.The Cannes film festival has always been very special in my heart. To bring films, fashion and filmmakers together is special and exciting. It’s even more exciting, in a way, to be able to come together and celebrate films. [It is] the 25-year anniversary of L’oréal Paris sponsoring the festival, and so, it is a real privilege and honour and I am very excited to be here."
  },
  {
    "id": 19,
    "title": "A face search engine anyone can use is alarmingly accurate ",
    "Image": "https://www.cuinsight.com/wp-content/uploads/2018/04/bigstock-193625041.jpg",
    "category": "footer3",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  
  // Technology
  {
    "id": 20,
    "title": "The world Goes beyond Thinking",
    "Image": "https://th.bing.com/th/id/OIP.xZy01t2g2X1yYA_GaCG7zQHaEL?w=278&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "technology",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 21,
    "title": " The World Goes On The Way Of Air Taxi ",
    "Image": "https://th.bing.com/th/id/OIP.7MICnM0whzz9njgRjTcLGgHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Technology",
    "description": "Dell is a computer technology company based in Round Rock, Texas, United States, that develops, sells, repairs and supports computers and related products and services. The company had briefly stepped into making Android smartphones but it shuttered its initiative. It remains one of the largest manufacturers of Windows PCs and tablets in the world."
  },
  {
    "id": 22,
    "title": "The Robotic Future Is On The Way",
    "Image": "https://th.bing.com/th/id/OIP.ttz1gGDihwrQ7OK0Uxa2QQHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Technology",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 23,
    "title": "The World Goes Towards Green Energy",
    "Image": "https://th.bing.com/th/id/OIP.H4G5ov8Tt3Sm4e8fr-UnjgHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Technology",
    "description": "Telegram founder and CEO Pavel Durov posted an account in his public Telegram channel Monday about his history of protecting user data from the Russian government. He ends the post saying, I stand for our users no matter what. Their right to privacy is sacred. Now — more than ever.He also tweeted a link to the post that said he had no regrets about his past actions standing up to the government and that he would again without hesitation."
  },
  {
    "id": 24,
    "title": "The Cars Going Towards Next Level ",
    "Image": "https://th.bing.com/th/id/OIP.N-C_pJa7r4E8e7T29YIhcwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Technology",
    "description": "Russia’s communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc’s Google and six other foreign technology companies for alleged violations of personal data legislation.Moscow has clashed with Big Tech over content, censorship, data and local representation in a simmering dispute that has erupted into a full-on information battle since Russia sent tens of thousands of troops into Ukraine on Feb. 24.Russia fined Google 3 million roubles ($46,540) last year for not storing the personal data of Russian users in databases on Russian territory, and on Friday said it had opened a new case over what it called Google’s repeated failure to comply with Russian legislation.The regulator also said it had opened cases against six other companies – Airbnb, Pinterest, Likeme, Twitch, Apple and United Parcel Service – for alleged first-time offences carrying a potential fine of 1-6 million roubles."
  },
  {
    "id": 25,
    "title": "Technology Is Wealth Of Any Country",
    "Image": "https://th.bing.com/th/id/OIP.y_8At8SpmfA4NkgZa96y8gHaE7?w=258&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Technology",
    "description": "With a huge jump in ebike ownership in the last 7 years and plenty of room to grow, the U.S. electric bike market will continue to expand quickly. Some analysts predict that within 10-15 years, U.S. will become one of the largest electric bike markets in the world, with millions of ebikes sold each year.it's a simple brushless motor from a PC cooling fan, but it works in broadly the same way as a bike's hub motor. There's a static part made up of four electromagnet coils (left) and a rotating part (right) made from a permanent magnet (the gray ring) that clips."
  },

  // Fitness
  {
    "id": 26,
    "title": "Tips to do a perfect headstand",
    "Image": "https://th.bing.com/th/id/OIP.gW3Nq0aLaNbFuwS8Psll7AHaEn?w=302&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Fitness",
    "description": "Referred to as the ‘king’ of asanas, headstand is an advanced yoga inversion. For beginners, it might seem that a headstand turns the world upside down. However, Anshuka Parwani, the celebrity yoga trainer, shared an Instagram post saying, “It looks intimidating, but once you build up to it, it becomes so easy. If you have never done one before, please make sure you practice with a certified teacher first. The procedure, as laid down by the yoga trainer is as follows Start with Vajrasana (diamond pose) and grab opposite elbows.Interlock your fingers and reduce the space between your elbows.Make sure your shoulders are nice and protracted and raise your knees.Activate your core, walk in and raise one knee to your chest and then the other and hold this position.Stay for a few seconds and build your strength.Extend one leg all the way to the top.When you feel more confident, extend the other leg.”"
  },
  {
    "id": 27,
    "title": " The Fitness Is Wealth",
    "Image": "https://th.bing.com/th/id/OIP.agX3fvU3eeugD6Qfb6JpBgHaEL?w=302&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Fitness",
    "description": "Yoga guru Baba Ramdev will donate his iconic saffron robe and a pair of his shoes to be used for his wax figure at Madame Tussauds here.The co-founder of the Patanjali Ayurved Limited, who was in London for a sitting for his figure, will be seen striking the ‘Vrikshasana’ (tress posture) yoga pose.The team of Madame Tussauds expert artists took over 200 specific measurements, as well as photographs of Ramdev to create an authentic likeness.“I am extremely pleased to be chosen by Madame Tussauds Delhi. The team is supremely talented; they were dedicated throughout the sitting experience. They have motivated me to keep inspiring and delivering the best to my followers. I am very much looking forward to seeing the finished figure,” Ramdev said."
  },
  {
    "id": 28,
    "title": "Strapping Help More To Build A Body ",
    "Image": "https://th.bing.com/th/id/OIP.sde4OEObhkOuXQNlOqHDLgHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Fitness",
    "description": "Shilpa Shetty Kundra, who often sets fitness goals with her workout sessions, yet again took to Instagram to share an exercise video — while vacationing in London.The 47-year-old ditched the cliché holiday pictures and instead treated her fans to a video of herself doing yoga asanas. In the clip, her sister Shamita Shetty can also be seen working out in the background.This time, the Nikamma actor could be seen performing ‘Gatyatamak Eka Pada Uttanasana Pawanmuktasana’ followed by ‘Naukasana’ and its variations for core strengthening. “Even if you’re in #VacayMode, don’t take a detour from your fitness road,” she captioned the video, attributing it to be the “motivation to start my day (even if I’m on a holiday with a 3-times-a-week fitness routine).”"
  },
  {
    "id": 29,
    "title": "The Workout For Everyday Is Important",
    "Image": "https://th.bing.com/th/id/OIP.nO4_m0Bq67pL3yAiTKDWVgHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Fitness",
    "description": "Consistency, patience, and discipline are extremely essential to reaching one’s fitness goals. If you are willing to take on the challenge, then you might want to learn some power moves from none other than Virat Kohli.The batsman, a fitness buff, often takes to social media to share his impressive workout routines. And recently, he dropped another video showcasing a power-packed workout. He also explained that power clean helps to increase “muscular coordination, leading to better power output, and enhancing overall athletic capacity”. “Such kinds of explosive compound movements yield great results not only in power and force output but also kinesthetic awareness, and neurological adaptations, which is required by athletes to train harder and run faster,” the expert mentioned.It is best to perform the exercise under guidance, especially for beginners. Also, if one has back, shoulders, or lower body joint niggles, avoid doing the power clean. During movement, if there is any pain or discomfort, it is best to discontinue and do basic stretches."
  },
  {
    "id": 30,
    "title": "The Schools Also Give Fitness Class",
    "Image": "https://th.bing.com/th/id/OIP.GiOzQtv03GF3LfEBdFPXVQHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Fitness",
    "description": " While regular practice of yoga is great for the overall health of a person, gym sessions ensure they stay active on the regular. One does not have to do both on a given day, they can take cues from Arora on how to spread the two exercises out through the course of the week. “Who says gymmers can’t be yogis? I believe in yoga and gym balance. To move, you don’t need to restrict yourself to one kind of exercise,” she captioned a video, which showed the actor and model doing yoga on a Monday by stretching one of her legs behind her and holding it with her hand, and then walking on a treadmill on Tuesday. "
  },

// Food
{
  "id": 31,
  "title": "The Vadapav Is Life Of Mumbaikars",
  "Image": "https://i.ndtvimg.com/i/2016-08/oav_625x350_71471093186.jpg",
  "category": "food",
  "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
},
  {
    "id": 32,
    "title": "In latest edition of bizarre food experiment, Egg Maggi",
    "Image": "https://th.bing.com/th/id/OIP.WFi0KDgSNqgaOY89YeOEbwHaGU?w=211&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Food",
    "description": "Eating the same food regularly may make people lose interest. Hence, often people come up with creative takes to spice it up. However, in order to reinvent people’s favourite Maggi, a street vendor decided to come up with a fruity fix — by adding eggs!Yes, while adding vegetables and other add-ons like egg, chicken or cheese are favoured combinations when it comes to the instant noodles, it has often seen experiments with something sweet before. From unusual cotton candy Maggi to obnoxious Maggi laddu and kheer, desi people on the internet have seen it all. However, it’s the first time fruit was seen being added to it.In a video shared on Instagram by The Great Indian Foodie, a woman is seen making Maggi on a big tawa (skillet), frying the masala in ghee and adding some water before putting the instant noodles in. However, taking inspiration from the previously viral Fanta Maggi, she is seen adding Mango juice to the pan. But what happens next really left all terrified online"
  },
  {
    "id": 33,
    "title": "International Burger Day: 5 Non-Vegetarian Burger Recipes You Must Try",
    "Image": "https://c.ndtvimg.com/2022-04/k9toe6b8_burger_625x300_23_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    "category": "Food",
    "description": "Can we call burgers the ultimate comfort food? May be yes! It is because we are running out of options to describe the lip-smackingly delicious snack. Loaded with cheese and mayonnaise, the oh-so-soft buns and the crispy patty have the power to lift our mood at any given day. After all, it is the hearty burgers we are talking about. Be it for breakfast or lunch or dinner, we are always ready for a wholesome burger. And, things get all the better if you have some juicy non-vegetarian burger options to pick from. Relatable, did we hear?! Well, in that case, we have some amazing recipes waiting for you.For the ones who love to relish the taste of lamb with chilli sauce, this recipe is your stop. The soft lamb patty between the buns with the punch of lettuce, and bell peppers, can make you want to have it again and again.The taste of your favourite main course dish combined with a crispy patty screams taste. The soft burger buns with heavenly chicken roasted in the makhana gravy can your tastebuds on a joy ride. Isn't it sound amazing?"
  },
  {
    "id": 34,
    "title": "This viral recipe for ice pizza has left netizens puzzled",
    "Image": "https://th.bing.com/th/id/R.2a85bc9a73a5e0c06aafc58c3aa269cb?rik=QJ21bOKopN5%2fCA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-X0gXXnxzZ3I%2fU7HR3ZT9gOI%2fAAAAAAAACW4%2f4zg5gfxGmVQ%2fs1600%2fDummy%2b15_W.jpg&ehk=0fBbHCAgCln0Q6FSLO9E6%2bK%2b0JcprGDxtrFRsvG9Yf4%3d&risl=&pid=ImgRaw&r=0",
    "category": "Food",
    "description": "If you are on social media, you would have definitely come across some bizarre food videos that left you scratching your head. The latest addition to such food experiments is the ‘ice pizza’. Yes, you read that right!Shared by an Instagram page — ‘Does He Bake Dough’ — the ice pizza recipe has gone viral on the internet, amassing over 1 lakh views and thousands of comments The video shows the chef kneading a soft dough and spreading it with his hands. His next step is what has left netizens puzzled — he topped the dough with three ice cubes before finally placing it into the oven. Next, the chef takes out the freshly baked pizza from the oven and drizzles grated cheese and some condiments over it."
  },
  {
    "id": 35,
    "title": "From vada pav to falooda: Popular street foods you must try in Mumbai",
    "Image": "https://th.bing.com/th/id/OIP.MR1HbP_DlQWgmbJXZRgonQHaE8?w=271&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Food",
    "description": "From Varanasi's baati chokha ko Delhi's golgappas, every city has distinct culinary offerings which reflect the food culture of the place. Here, we bring to you some amazing street food options which are a must-have when you are in Mumbai next. Mumbai's street food begins with vada pav, vegetarian dish which consists of potato patties placed inside a pav (soft bun). But this street delicacy is incomplete without the peanut, garlic and red chilli spread it is served with. Your trip to Mumbai will be incomplete without a hot crispy vada pav.Every city has it's own version of pani puri or golgappa, and Mumbai has it too. The hollow, puffed, round dough ball is filled with a spicy potato-based mixture and dipped in masala water. The ones served in the city are much sweeter."
  },
  {
    "id": 36,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://s-media-cache-ak0.pinimg.com/originals/2c/15/0d/2c150dfb2d8ddfa8ea564a8793ae7417.jpg",
    "category": "Food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 37,
    "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
    "Image": "https://th.bing.com/th/id/OIP._Q2yFQiO077kXe40Je8qKQHaE8?w=297&h=198&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "category": "Food",
    "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
  },
  
  ]);


  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}

      </store.Provider>
    </div>
  )
}

export default Details