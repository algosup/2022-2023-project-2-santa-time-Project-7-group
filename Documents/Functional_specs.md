# **Functional Specifications**

# Table of contents

* [Project scope](#projectscope)
* [Requirements](#requirements)
* [Risks and Assumptions](#risks-and-assumptions)
* [Configuration](#configuration)
* [UI/UX](#uiux)
* [Marketing](#marketing)
    * [SEO](#seo)
    * [Market research](#market-research)
    * [Advertisement on a personnal level](#advertisement-on-a-personnal-level)
    * [Social Media Marketing and Forum Based Avertisment](#social-media-marketing-and-forum-based-avertisment)
    * [Measuring Advertising Effectiveness](#measuring-advertising-effectiveness)
    * [Concurence](#concurence)
* [Personas](#personas)
* [Calculating Santa's arrival time](#santa-arrival-time)
	* [The math](#the-math)
	* [Example](#example)
* [Sources](#sources)
* [Glossary](#glossary)

# Project scope

The end goal of this project is to create a website where users could look up when will Santa arrive with their presents.

- The end product must contain a search tool to look up addresses and, subsequently, Santa's arrival time to said addresses. 
    - To avoid unnecessary performance bottlenecks, the search tool must look up the addresses from a database linked with the project instead of using already existing APIs[^1].

- For the sake of this project, Santa always arrives exactly at solar midnight[^2] (midnight depending on the sun's position instead of the local time). Latitude coordinates[^3] can be ignored during the calculation of Santa's position.

- The website is expected to receive high levels of user traffic, therefore good performance is going to be essential for this project. The backend of the server must be able to function under peak load without overusing server resources otherwise.

- The frontend of the website is to be kept simplistic and easy to follow. Heavy assets, such as 3d models or large images must be avoided at all costs.

- The usage of Docker[^4] as a base technology has been imposed as an obligation by the client.

- Finding users for the working product is part of the development team's duties. For this end, the product must move into its production phase before the 25th of November 2022.

# Requirements

- The product must be realised in Docker.
- The product must be available online.
- The product must be able to function under heavy user traffic as well adapt to sudden changes in user traffic.
- It must be possible to search for locations using a search bar.
    - The search bar must draw its information from a database attached to the project, NOT an external API.
    - Geolocalisation button.
    - Search suggestions.
- The product must be able to calculate Santa's arrival time using the longitude obtained from the input address and the current time.
- In addition to the remaining time, the website must also show Santa's exact arrival time while taking into account the user's timezone. 
- (optional) The website must exist in multiple languages and allow the user to change the language the website is displayed in.
    - (optional) The website must detect the browsers language and display itself accordingly.
- (optional) A gacha system could be put in place to touch into a slightly older target audiance then the intended 5-15 years old range.
- (optional) Market research has show interrest in a functionality to display random facts related to christmass, reindeers, etc.


# Risks and Assumptions

- The maximum number of users at peak traffic is unknown.

- Most docker and database hosting services are blocked behind a paywall. It is assumed that every service necessary for the completion for the project has either a lax enough free tier or a free trial period large enough for the completion of the project.
    - If such services are not available, it is assumed that ALGOSUP[^5] will provide the development team with an account for a service that conforms to our needs.

- It is assumed that Docker is a viable technology for hosting the final website in an efficient and elastic manner.

- It is assumed that sending requests en masse to test the final product's performance is possible.

- It is assumed that a functional version of the project can be placed into production before the 25th of November 2022.

# Configuration

The user must be able to use the website without any additional effort necessary on their behalf (there is no need for logging in, etc..).

# UI/UX <span id="uiux"></span>

The website must keep its style simple but Christmassy.
The input field for the location must also include a placeholder that specifies that it is supposed to recieve a location.

WIP

# Marketing

## SEO (Search Engine Optimization) <span id="seo"></span>

The website must be optimized to maximise visibility on well known search engines (ex.: Google).

## Market research

The following form has been created for sake of product demand validation:
[Google form english](https://forms.gle/ucnKXGWMtaWT9wYu5)

WIP

## Advertisement on a personnal level

The final product must be advertised to personnal connections of the developement team.
This must be done before larger scale advertisement as the feedback from this will be essential in finding bugs in the freshly finished product.

## Social Media Marketing and Forum Based Avertisment

The website can be advertised in variety of social medias and online forums.
Examples of such sites are (but not limited to):

- Reddit
- Linkedin
- Twitter
- Facebook
- 18-25

## Measuring Advertising Effectiveness

Optionaly, a separate link can be prepared for every platform we advertise on.
This way it could be possible to measure which platforms are the most effective.

## Concurence

Our research indicates the following websites to be our main concurencies:

Concurent ALGOSUP groups:
- [Group 5's website](http://xmas.algosup.com/)
- [Group 6's website](http://santaclock.algosup.com/)
- [Group 8's website](http://santa.algosup.com/)

External concurences:
### [- North American Aerospace Defense Command](https://www.noradsanta.org/en/)

NORAD's Santa Tracker is one of the oldest such sites.
It has long history and is part of a long going tradition where children can call their hotline to report Santa's position.

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|Very well known worldwide|Their website is outdated|Opportunity for self-promotion and recruitement|Google's Santa Tracker|
|They are traditional   |They are old (Since 1955)||http://catchyoursanta.ml/|
|They are educational   ||||
|They got their own gift shop||||
|They got their own Youtube channel||||
|They have their own hotline for children to call||||


### [- Google's Santa tracker](https://santatracker.google.com/)

Google's Santa Tracker is the main competitor for NORAD's. 
Their main advantage over NORAD is their website, which is a lot more modern and appeals better to the younger genereations.

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|Awesome website        |Website can be overhelming|Opportunity to influence the younger generations (3-15 years old)|NORAD's Santa Tracker|
|Lots of animations     |Not as personal as NORAD for example||http://catchyoursanta.ml/|
|Strong color scheme    ||||
|Lots of online games   ||||
|Strong advertisement   ||||


### [- Email Santa's Santa tracker](https://www.emailsanta.com/santa-tracker.asp)

A gimicky website, while originall created to send letters to santa they also posess a Santa tracker that shows exactly where Santa is.

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|They identify users by their email addresses|Badly made website||Website might not appeal to parents||GDPR|
|Lots of gimicks and moving parts on the website|Annoying music plays automatically||http://catchyoursanta.ml/|
|They show Santa's exact position|Website asks for application to be installed at almost every step|

### [- Planefinder](https://planefinder.net/)

Website who's goal is to track airplane positions. They recently added a feature to also show Santa's Sleight.

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|Gigantic user base|No actual countdown||http://catchyoursanta.ml/|

### [- Sky Q](https://www.sky.com/)

Sky Q is a subscription-based television and entertainment service operated by British satellite television provider Sky, as a part of its operations in Austria and Germany, Ireland, Italy and in the UK.

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|Voice commands|Very limited availibilty||http://catchyoursanta.ml/|


### Mobile applications

There are a number of phone applications that allow to follow santa both for Android and IOS.
These are both very numerous and very simular to each other therefore they will only be mentioned as a whole.

[Google Play Store](https://play.google.com/store/search?q=Santa%20Tracker&c=apps)
[Apple Store](https://www.apple.com/us/search/santa-tracker?src=globalnav)

| Strengths | Weaknesses | Opportunities | Threats |
|-----------|------------|---------------|---------|
|Easy availibilty|Very generic||http://catchyoursanta.ml/|
|Easily found by children|

# Personas

These are personas that represent potential customers can be found.

![Dennis](./images/persona_1.png)
![Lois](./images/persona_2.png)
![Geremy](./images/persona_3.png)
![Mark](./images/persona_4.png)
![Adam](./images/persona_5.png)
![Julia](./images/persona_6.png)
![Anon](./images/persona_7.png)

# Calculating Santa's arrival time <span id="santa-arrival-time"></span>

## The math

Santa's exact arrival time will always be exactly 00:00 25th December, <u>solar time</u>.
Therefore, the following equation can be used to calculate the local solar midnight time in hours:

```
LT = DST + ((15 + Z - Lloc) / 15) - (E/60)
```

Where:

```
LT is the local time adjusted to day-saving time.
```

```
DST is an offset to count for Day Saving Time.
(DST=1 if time needs to be adjusted and DST=0 otherwise)
In December, daylight saving should always be 0.
```

```
Z is the GMT timezone of the location in question.
For example, Paris is in GMT+1, therefore for Paris Z=1.
```

```
Lloc is the Longitude coordinate of the location.
```

```
E is the equation of time in minutes.
As we will always be looking for the 24th of December, E is going to be constant in our case.

E = 0.3829280015475218
```

<details>
    <summary>How do we get this value?</summary>

    E = 0.258 * cos(B) - 7.416 * sin(B) - 3.648 * cos(2*B) - 9.228 * sin(2*B);

    B = 360 * (n - 1) * (pi/180) / 365.242

    Here, n is the day in the year, and B has its units in radians.
</details>

---

## Example

Let's take Vierzon, France as an example.

```
Vierzon's longitude = 2.0698
Vierzon GMT timezone = +1
```

Therefore:

```
LT = DST + ((15 * Z - Lloc) / 15) - (E/60)
LT = 0 + (15 * 1 - 2.0698) / 15 - 0.3829280015475218 / 60
LT = 0.85563119997
```

This means that Santa will arrive at precisely 0.85563119997 hours.

Consequently:

```
hours = floor(0.85563119997)
hours = 0

minutes = floor(0.85563119997 * 60)
minutes = 51

seconds = floor((0.85563119997 * 60) % 1 * 60)
seconds = 20
```

In this example, Santa will arrive at 00:51:20 on the 25th of December.

# Sources

- [Solar time calculator](https://koch-tcm.ch/wp-content/uploads/the-calculator.html)
- [How to calculate solar time](https://www.powerfromthesun.net/book.html)
- [How to calculate solar time (simplified)](https://faculty.eng.ufl.edu/jonathan-scheffe/wp-content/uploads/sites/100/2020/08/Solar-Time1419.pdf)
- [NORAD Santa Tracker vs Google Santa Tracker](https://www.pocket-lint.com/apps/news/131903-norad-tracks-santa-vs-google-santa-tracker-which-tracks-father-christmas-best)

# Glossary

[^1]: API : An <u>Application Programming Interface (API)</u> is a way for two or more computer programs to communicate with each other.

[^2]: Solar time: Solar time is a calculation of the passage of time based on the position of the Sun.

[^3]: Coordinates: [click here for details.](https://en.wikipedia.org/wiki/Geographic_coordinate_system#Latitude_and_longitude)

[^4]: Docker: [Docker](https://www.docker.com/) is a set of platform as a service product that use OS-level virtualization to deliver software in packages called containers.

[^5]: ALGOSUP: [ALGOSUP](https://algosup.com/) is a software development school in Vierzon, France.