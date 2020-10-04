# Charity Match
Demo: https://youtu.be/4k7-kA1NdB4

## Inspiration
Many people want to help out with something they are passionate about, but they might not know where to start. That's why we came up with Charity Match, a platform that matches people to a local organization that they can get involved with. Whether it be volunteering or donating, we wanted to create a way for everyday people to easily find a charity to help out.

## What it does
Charity Match starts with a quiz that users can take to determine what they are interested in and passionate about. We ask questions like what you do in your free time, subjects you enjoy learning about, a movie you love, and more. Through a few of these questions, we match users up with an organization in topic that they care about. 

## How I built it
We created a custom quiz using React.js that tailors the user to a specific charity that matches their interests.
The results of the quiz determines what category of charities the user might be interested in if they want to reach out to even more organizations. Charity Match fetches charity organization data from Charity Navigator API and plots charities on map made from leaflet.js and Google Cloud API.

## Challenges I ran into
We ran into multiple errors when using React.js for the quiz section. We were unable to export the constant that stored the user inputs. Our team also had trouble using the google cloud API but was able to solve it after debugging as a team. But we still powered through!

## Accomplishments that I'm proud of
Our frontend team was able to design an efficient interface with high usability in only 24 hours. We managed to successfully fetch data from an API for the first time and import it to our map. In just a day, we were able to complete something we were satisfied about, so we look forward to creating even more above those hours. 

## What I learned
Throughout these 24 hours, our team learned a multitude of new skills, both together and separately. Prabu learned how to better use Python to interact with json objects and integrate the charity navigator API. Daniel learned how to interact with leaflet and code in React. Cindy learned how to structure React.js project efficiently with components and open-source libraries. Sophia learned how to work with React and design an easy user experience for anyone using the product. As a team, we learned that we had diverse skill sets that allowed us to think about things outside of our own perspectives. We learned so much from each other, and while we stayed up super late to grind the project out, we realized how much we **love** hackathons, and we had so much fun creating a project we were passionate about.

## What's next for Charity Match
We plan to include more charities, categories, and quiz questions to get the best match. We would love to add a feature allowing us to store the quiz data so that users can see what other consumers interests were, and turn our dashboard into an application for ease of access.
