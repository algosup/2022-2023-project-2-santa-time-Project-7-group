# Functional Specifications

## Table of contents

## Project scope

The endgoal of this project is to create a website where users could look up when will Santa arrive with their presents.

- The endproduct must contain a search tool to look up addresses and subseauently Santa's arrival time to said addresses. 
    - To avoid unnecessary performance bottlenecks, the searchtool must look up the addresses from a database linked with the project instead of using already existing APIs.

- For the sake of this project, Santa always arrives exactly at solar midnight (midnight depending on the position of the sun instead of the local time). Latitude coordinates can be ignored during the calculation of Santas position.

- The website is expected to recieve high levels of user traffic, therefore good performace is going to be essential for this project. The backend of the server must be able to function under peak load, without overusing server resources otherwise.

- The frontend of the website is to be kept simplistic and easy to follow. Heavy assets, such as 3d models or large images must be avoided at all cost.

- The usage of Docker as a base technology has been inposed as an obligation by the client.

- Finding users for the working product is part of the developpement teams duties.

## Risks and Assumptions

- The maximum number of users at peak traffic is unknown.

- Most docker and database hosting services are bloced behind a paywall. It is assumed that every service necessary for the completion for the project has either a lax enought free tier or free trial periods large enought for the completion of the project.

- It is assumed that Docker is a viable technology for hosting the final website in an efficient and ellastic manner.

- It is assumed that sending requests en masse to test the final products performance is possible.

## Requirements

- The product must be realised in Docker.
- The product must be available online.
- It must be possible to search for locations using a searchbar.
    - The searchbar must draw its information from a database attached to the project, NOT an external API.
    - (optional) Geolocalisation button.
- The product must be able to calculate Santa's arrival time using the longitude obtained from the inputed address and the current time.
- In addition to the remaining time, the website must also show Santa's exact arrival time while taking into account the users timezone. 

## Configuration

The user must be able to use the website without any additional effort necessary on their behalf (there is no need for logging in, etc..).

## Calculating Santa's arrival time

### <u>Calculating solar time</u>

The equation to calculate solar time is as follows:

```
solar time = standard time + 4(Lst − Lloc) + E
```

Where:

```
Standard time is the Local Standard Time (LST). Not to be confused with either Daylight Savings Time (DST) or Greenwich Mean Time (GMT).
```

```
Lst is the Local Standard Meridian.
To determine Lst, multiply the difference in time between local standard clock time (LST) and Greenwich Mean Time (GMT) in hours by 15°.

Lst = 15*(standard time - Greenwich time)
```

```
Lloc is the locations longitude.
```

<span id="Ecalc"></span>

```
E is the equation of time in minutes. It calculates as follows:

E = 0.258 * cos(B) - 7.416 * sin(B) - 3.648 * cos(2*B) - 9.228 * sin(2*B);

B = 360 * (n - 1) * (pi/180) / 365.242


Here, n is the day in the year and B has units radians. The units for the right hand side of the equation
used to calculate solar time are minutes.
```

---

### <u>Calculating Santa's arrival time</u>

Santa's exact arrival time will always be exactly 00:00 25th December, <u>solar time</u>.
Therefore, the following equation can be used to calculate the local solar midnight time in hours:

```
LT = DST + ((15 + Z - Lloc) / 15) - (E/60)
```

Where:

```
LT is the local time adjusted to day saving time.
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

For the exact calculation to find E please see the explanation [above](#Ecalc).

---

### <u>Example</u>

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

This means, that Santa will arrive at precisely 0.85563119997 hours.
This means:

```
hours = floor(0.85563119997)
hours = 0

minutes = floor(0.85563119997 * 60)
minutes = 51

seconds = floor((0.85563119997 * 60) % 1 * 60)
seconds = 20
```

In this example, Santa will arrive at 00:51:20 on the 25th of December.

## Use cases



## Sources

- [How to calculate solar time](https://www.powerfromthesun.net/book.html)
- [How to calculate solar time (simplified)](https://faculty.eng.ufl.edu/jonathan-scheffe/wp-content/uploads/sites/100/2020/08/Solar-Time1419.pdf)

## Glossary