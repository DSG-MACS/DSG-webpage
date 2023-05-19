# DSG-discussion

General discussion items in the DSG group

## Webpage setup instruction 
1. ### Clone the current git repo 
```
git clone git@gitlab-student.macs.hw.ac.uk:dsg/dsg-discussion.git
```

2. ### Enter the webpage directory 
```
cd webpage/
```

3. ### To run the webpage make sure the following dependencies are installed.   
   - [hugo](https://gohugo.io/installation/)
   ```
   // ensure the hugo command line is assesible 
   hugo -h
   ```
4. ### Start the server in debug mode 
   ```
   hugo serve
   ```

## Windows installation
https://www.youtube.com/watch?v=G7umPCU-8xc
## Mac installation 
https://www.youtube.com/watch?v=WvhCGlLcrF8
## Linux installation
```
// Arch
sudo pacman -S hugo
// Debian
sudo apt install hugo
// Fedora
sudo dnf install hugo
// OpenSuse 
sudo zypper install hugo
// Solus
sudo eopkg install hugo
```

## Docker 
```
docker pull klakegg/hugo
```

## Contribute content guidelines 
1. ## enter the appropriate directory 
```
// create a new branch from the current main branch
// this is because the main branch is in a protected 
// view
git checkout -b <branch name>

// enter the apprpirate directory
cd webpage/content
```
2. ## The entire content section is markdown files 
- To add a new project 
 ```
 // current path (webpage/content/projects)
 cd projects/
 ```
- Create a markdown file ```.md file``` with the project name 
 ```
 touch <project name>.md
 ```
- Edit the following file created with the following boiler plate 
```
---
title: <title>
draft: false
description: <description>
tags: ["<tag relvant>",...n ]
showDateUpdated: true
---
<img style="float: right; height:10rem" src="<image path>">
<your mark down content>
```
- preview your changes
```
// start the debug server
hugo serve
```

Here is a Haskell intro generated by ChatGPT
```
---
title: "Intro to Haskell"
draft: false
description: "This content was lazily generated from ChatGPT sorry"
---

<img style="float: right; height:10rem" src="https://global-uploads.webflow.com/6047a9e35e5dc54ac86ddd90/63064c5652d40eda2eb7a838_33ac2334.png ">

Oh, Haskell, the language of mythical creatures and whimsical code! Prepare to be enchanted by the magical world of Haskell, where logic and creativity dance hand in hand.

Legend has it that Haskell was born when a group of wizards gathered at the peak of Mount Monad and chanted mysterious incantations, summoning a language unlike any other. Haskell emerged from the depths of their arcane knowledge, clad in robes of pure functional purity.

In Haskell, you will embark on a journey through the enchanted realm of immutability, where variables never change and values are as steadfast as the roots of the oldest trees. You'll be bewitched by its type system, which guards your code like a dragon protecting its hoard, ensuring that only the correct types may pass.

```haskell
-- # Magical Markdown
-- Welcome to the enchanted world of Haskell, where code and text intertwine like fairy tales.
-- Prepare yourself for a journey through the enchanted forests of functional programming!

import Control.Monad (replicateM)
import System.Random (randomRIO)

-- ## The Sorcerer's Spell
-- Behold, a spell to summon a random number between 1 and 10!

sorcerersSpell :: IO Int
sorcerersSpell = randomRIO (1, 10)

-- ## The Mysterious List
-- Once upon a time, in the land of Haskell, there was a magical list that could generate itself.

mysteriousList :: [Int]
mysteriousList = let
  go :: Int -> [Int]
  go n = n : go (n + 1)
in go 1

-- ## The Brave Adventurer
-- Our brave adventurer embarks on a quest to conquer the mighty monads!

adventurer :: IO ()
adventurer = do
  putStrLn "Our brave adventurer enters the monadic dungeon!"
  putStrLn "Suddenly, a random number appears:"

  randomNumber <- sorcerersSpell
  putStrLn $ "The number is: " ++ show randomNumber

  putStrLn "The adventurer encounters the mysterious list:"
  putStrLn "Behold, the first 5 elements of the list:"

  let firstFiveElements = take 5 mysteriousList
  putStrLn $ "- " ++ show firstFiveElements

  putStrLn "Our adventurer emerges victorious, with Haskell's power in hand!"

-- ## The Grand Finale
-- Now, let's witness the grand finale as our adventurer takes on the quest!

main :: IO ()
main = do
  putStrLn "Once upon a time in the magical land of Haskell..."
  putStrLn "Our brave adventurer steps forward, ready to face the challenges that lie ahead."
  putStrLn "Are you ready to witness the magic?"
  putStrLn "Prepare yourself..."
  putStrLn "And let the adventure begin!"
  putStrLn ""

  adventurer
```
But beware, for Haskell is a land of endless recursion, where even the bravest of programmers may find themselves lost in an infinite loop. And fear not the side effects, for they are banished to the dark corners of the monadic world, where only the chosen few dare to venture.

In this realm, functions are like spells, casting their magic on the data that flows through them. Pattern matching is your wand, allowing you to conjure elegant and concise code. And laziness, oh laziness, it is the hidden power that allows you to create infinite lists and compute only what you need, like a genie granting wishes without wasting an ounce of magic.

But do not be deceived, for mastering Haskell is no easy feat. It requires the wisdom of a sage and the patience of a saint. You will spend hours deciphering cryptic compiler error messages, wrestling with the monads, and taming the wild beasts of type inference. But fear not, for with persistence and dedication, you shall prevail.

So, if you dare to enter the realm of Haskell, be prepared to be enchanted by its elegance and haunted by its challenges. Embrace the functional magic, and may the Haskell wizards guide you on your quest for enlightenment!
```
Link to how this looks: 

<!-- ## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab-student.macs.hw.ac.uk/dsg/dsg-discussion.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab-student.macs.hw.ac.uk/dsg/dsg-discussion/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!).  Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers. -->
