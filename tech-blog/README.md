## Technical Blog Website
This website is designed so as to serve two purposes together. This websites autommatically picks up the content from my medium blog in the form of RSS feed, converts it into json and present it to the user.

Therefore, just by writing medium blogs I can ensure that my blog is automatically updated without me having to update each and every blog twice via hard-coding.

It is also a web-app which can be downloaded into mobile phones irrespective of the OS. This particular task is achieved using service-workers.

## Features

* Ranking 100 in both 'Best Practices' and the 'SEO' by Google's Lighthouse Analytics
* Is also a web-app, and can be installed natively in the mobile phone irrespective of the platform. 
* Is dynamic and is powered by Medium.com's RSS feed and thus saves me from hard-coding my blogs again and again
* Makes us of a fast API to covert RSS to JSON and serve the content.