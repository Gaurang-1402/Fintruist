
## Inspiration 💡 

Let us start with a story. About one year ago, one of our teammates got a text message about a charitable crowdfunding campaign seeking donations that promised that all the money raised would go towards planting trees. Our teammate scrolled through their Facebook page and was impressed by their previous work greenifying areas in India. So he made a sizable donation to the campaign. However, he later learned that the pictures posted were scraped off the internet and he, along with several other people, was scammed by this fraudulent crowdfunding campaign.

Reflecting on that experience, we decided that we will only make donations to charitable campaigns if and only if they show us deliverables for the cause they support. However, **current crowdfunding platforms focus on raising money before the campaign takes actions.** By compelling campaigns to deliver on certain milestones, we can **effectively prevent fraud because donations do not take place until evidence is provided.** We were willing to donate only after certain milestones were achieved by the campaign.

*To facilitate a transparent deliverables-based transaction between donors and charitable crowdfunding campaigns, we created* **Fintruist** ✨


![TopBar.png](https://i.postimg.cc/mkNgL4mp/TopBar.png)
![prev-topbar.png](https://i.postimg.cc/6QPQpYtR/prev-topbar.png)

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

## What it does 🤔 
**Fintruist** is a *decentralized crowdfunding application* that uses bleeding edge-technologies to fight against Scams and Frauds in the name of Fundraising and Crowdcampaigns.

![what-it-does2.png](https://i.postimg.cc/SNVkKDGs/what-it-does2.png)

On **Fintruist**, charitable organizations can create campaigns that allow users to donate *fixed amounts*. *But donations will* **only be executed after the donors verify the deliverables** *that were promised by the organization*.

![Userflow.png](https://i.postimg.cc/wBJ0FxFG/Userflow.png)


![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)


## How we built it 🦾 
* __Frontend:__ ReactJs, Tailwind CSS
* __Backend:__ Solidity, Truffle, IPFS, Web3.js 
* __Tools:__ Auth0, Botdoc.io, Dasha, Moralis
* __Design:__ Figma, Illustrator, Photoshop, After Effects

For Blockchain Network, we went ahead with ETH & Wei.
![Chain.png](https://i.postimg.cc/G2S54gpF/Chain.png)

And several other 3rd party services & testing tools & obviously GitHub as VCS.

![tech-stack-Devpost.png](https://i.postimg.cc/GtGxbXTh/tech-stack-Devpost.png)

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

## Team Discord Usernames

- Gaurang#8050
- Hogo101#3616
- Neel#0242
- EndofLeTime#6747

## Social Good 👨🏻‍🤝‍👨🏽

*We began this hackathon with a singular mission*: **To facilitate deliverables-based donations to prevent donors from falling for scams**. A government study estimates that **annually $15 million are lost** in *charitable crowdfunding campaigns*. We want to stop this money leak. Preventing the said hefty amount from being lost in these scams is $15 million more being devoted towards causes for social good.

Moreover, our long term aim is to win the trust of donors so that they feel confident to donate larger amounts and increase the total number of donors of social good in this world!

*We are a team of* **4** *driven to build technology to promote* **social good**.

![Mockup.gif](https://i.postimg.cc/PqW6tFmV/Mockup.gif)

---

## Design 🎨

Our [Figma file](https://www.figma.com/file/YlhliB853GSF63l9Us9a8J/Final-File?node-id=0%3A1) consists of Wireframes, Mockups, and Design Documents we used to build our application.

We were heavily inspired by the revised version of **Double-Diamond** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond-1.png](https://i.postimg.cc/B6qjjNzn/Double-Diamond-1.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Tailwind** inspired design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![figmacrop.png](https://i.postimg.cc/P5SD1gm8/figmacrop.png)
![color-palette.png](https://i.postimg.cc/J4mHvrxk/color-palette.png)

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

## Research 📚 

Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- https://bit.ly/3qXELlA
- https://bit.ly/3jh0IIt
- https://bit.ly/3u1gFbE
- https://bit.ly/3NIetO8


## Best Use of Dasha AI 👂

Given that Web 3.0 is still in the infancy stage, we believe that decentralized applications need constant feedback on user experience to disrupt their Web 2.0 counterparts. To *get feedback*, we use Dasha SDK to create **a chatbot that collects feedback from donors on our platform**.

## Botdoc 🤖

The *donations in our application need to be securely logged for our donors* **so that they have a chance to review their donations later**. To send receipts securely, we use the **Botdoc API** to send a receipt to users after they approve a donation. Given the ubiquity of mobile phones, we also send a message to the user using Botdoc's messaging API with the receipt attached. **Botdoc's API has allowed us to reinforce our mission to become the safest and most secure crowdfunding platform.**

## Auth0 🔐

Auth0 was used to integrate seamless login via **SSO**, and we even use Multi-Factor Authentication to have a Secure sign-in. This is important to prevent spam, fraudulent, charitable crowdfunding campaigns from flooding our application.

## Best Domain Name from Domain.com 🌐 

- `deliverables-based-donations.space`


## 🏅 Accomplishments that we're proud of
We are proud of finishing the project on time which seemed like a tough task as we had so many features to implement. Moreover, we learned a lot about AuthO, Dasha, BOTDOC.io, new web3 technologies, and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

## 🧠 Challenges we ran into
This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, *extensive research*, and yes, hitting the final pin on the board.

We tried to incorporate several *Web 3.0 technologies* and this was challenging since half of the team's forte was in Web 2.0 technolgies*.

Special thanks to — *Rafael from Botdoc* [**Rafael Juzwiak#3199**] 🤗

## What we learned 📖 
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)


## What's next for Finturist 🚀
*We believe that our App has great potential*. We plan to expand it's capabilities by *incorporating other languages*. Our next step is to expand the number of variables taken into account in our algorithm. Besides, creating a mobile app is also on our mind which will surely amply the count of audience base from across the globe. 


**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**

![footer.png](https://i.postimg.cc/xTkBrQd9/footer.png)
