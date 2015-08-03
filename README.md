# Emissions Widget
A widget that visualizes kWh savings as car emissions that have been offset. The widget is intended to live in dashboard that reports details of a user's energy usage.

### How did I get there?
This widget gives a small glimpse into the impact that energy conservation has on the environment. To convey this to a user, we need to use ideas that they have experienced, or can mostly imagine. The prompt stated to convey how many cars are 'removed from the road' by the user's energy savings.

What does it take to remove a single car from the road? (spoiler-alert: it takes _a lot_) If I was asking myself this question, a consumer might wonder the same thing. The widget should break down this equation into a bite-size chunk.

In the next section, I'll digress into some research that shaped my design choices.

## Research

### Cars and Gasoline
The first thing that I did was dive into the details of car energy consumption. Going after the idea of 'energy offset' led me to investigate how much energy is in a tank of gasoline compared to the average kWh.

>GGE (Gasoline Gallon Equivalent) = kWh * .031 [source] (http://www1.eere.energy.gov/vehiclesandfuels/epact/fuel_conversion_factors.html)

That means 1,000 kWh produces the same amount of energy as 31 gallons of gasoline.

That sounds significant until we take a look at the average miles driven per vehicle in the US. Until self-driving cars take off, let's assume that we can find this number by looking at driver statistics.

>Average Annual Miles per Driver = 13,476 (1,123 miles per month) [source](http://www.fhwa.dot.gov/ohim/onh00/bar8.htm)

Since our comparison is to gasoline, we need to find out how many gallons of gas that converts to...

>MY 2013 fuel economy averaged 24.1 mpg [source](http://epa.gov/otaq/fetrends.htm)

If we divide the average miles driven per year by the average MPG of vehicles today, we find that **the average driver consumes about 559 gallons of gasoline per year, or 46.5 gallons/month.**

Before I go any further, let's shift gears to kWh.

### kWh Usage

>In 2013, the average annual electricity consumption for a U.S. residential utility customer was 10,908 kilowatthours (kWh), 909 kWh/month [source](http://www.eia.gov/tools/faqs/faq.cfm?id=97&t=3)

Now that we have a baseline for how many kWh an average utility customer consumes, we can determine that **if the average customer shut off their electricity for an entire month, they still wouldn't save enough energy to offset the energy consumption of an average month of driving.** Here's why:

909 kWh (average month of use) = 28.1 gallons of gasoline, but the average driver's monthly gasoline consumption is 46.5 gallons.

Now that I know that in a perfect world – where the temperature never needs adjustment, we all read paperback novels for entertainment, send telegrams, eat raw food, and bathe in cold water, – we still wouldn't offset a month of driving, I needed to think smaller.

Let's get back to the goals: illustrate the impact of the user's last month of energy savings in terms of vehicles. This would be a good point to move away from gasoline and kWh, and focus on what 'savings' might mean to a utility customer.

### 'Savings'

What does savings mean? 'Savings' might be small, but we want it to feel significant. We want to show a utility customer that every little bit matters, and encourage them to keep up the good work.

**In this widget, customers that 'saved energy' will be defined as those that used less energy than they did in the same month last year.** For example: Sally used 995kWh this July, compared to last July when she used 1023kWh. Sally will be rewarded with this widget on her dashboard.

How can we quantify Sally's savings into a number that she can understand?

### Emissions

In my opinion, energy displacement is hard to understand. I'm sure there are some that are apt to comparing boiling points between fuels, but I find it a little bit specialized.

Greenhouse gas emissions, on the other hand, are a conversation topic around most dinner tables. 

When we take the average CO2 emissions from 1 kWh and compare it to the average emissions from a vehicle per month, we find that **the CO2 from 1 kWh = 1.335 hours of driving emissions per month**. (If you're interested in how I got this number, inspect the comment block in `calculations.js`)

And there we have our comparison. When you take kWh and compare it to sometime that everyone can experience - time, and more specifically, driving-time ("what's your daily commute?") - then we've found a relatable metric that will do the job.

## Design

### Scenario
A customer that saved energy this month will be shown the impact that their energy savings had on the environment.

### Intent
The widget should inform, delight, and motivate. It should not talk down to, confuse, or intimidate users.

### Constraints
A couple of days and my designer-dev skills. 

## The Story
1. A customer that saved energy last month logs onto their utility's website to find out more about their utility use.
2. The Emissions Widget informs the customer that they saved energy last month, and by doing so, offset CO2 emissions. The customer is invited to see how much they saved.
3. When the customer interacts with the widget, kWh and equivalent 'time removed from the road' are revealed, and the graphic animates to visualize these numbers.
4. The customer is intrigued, and the widget offers further exploration through a 'learn more' call-to-action.
5. When the customer clicks 'learn more', they're given more detail on the CO2 comparison between 1 kWh and 1 hour of driving, in addition to their actual kWh savings that drove this number.
6. The widget shows the customer's energy use next-month-last-year compared to the previous month, for scale. The widget challenges the customer to beat next-month-last-year's number to continue saving.

## Next steps
This Emissions Widget is just a starting point for more complex comparisons as a customer saves more and more energy. _Total Savings This Year_ would provide scale, and _You Compared to Your Neighbors_ would add context to the customer's averages.

For now, the widget is intended to simply educate, delight, and motivate further energy conservation. I hope you enjoy it!
