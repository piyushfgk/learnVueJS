---
published_at: 2023-12-05 17:04:05

toc: true

title: Upload project using Github and automatic project update

description: 1. Go to you windows system, and install Git if not installed [Download from here](https://git-scm.com/downloads). 2. You have created private repository, so you must have to generate SSH keys and add it to your github account/repository. 3. Open Git Bash and Generate a SSH key for your project. Checkout [official documentation]

image: /images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2012.png

head:
  meta:
    - name: "keywords"
      content: "github, git, hostinger, ssh, ssh-keys, keygen, public key authentication, github repository"
    - name: "og:image"
      content: /images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2012.png
    - name: "twitter:image"
      content: /images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2010.png
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Piyush"
    - name: "copyright"
      content: "@ 2024 Techlit India"
    - name: "og:title"
      content: "Upload project using Github and automatic project update"
---

# 3. Upload project using Github and automatic project update (git pull)

Status: Completed
Due Date: March 18, 2024
Project: samaddar.in Rahul Samaddar web project

## Create Repository in Github

1. Sing in to your Github account
2. Create **private** repository and `do not add README, License or any file`

## Install Git (Git bash) and generate SSH keys

1. Go to you windows system, and install Git if not installed [Download from here](https://git-scm.com/downloads).
2. You have created private repository, so you must have to generate SSH keys and add it to your github account/repository.
3. Open Git Bash and Generate a SSH key for your project. Checkout [official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account). `You can run SSH commands using PowerShell too`

   - Start here to use `Windows command line` agent for **easy access to git repositories.** [Read more](https://interworks.com/blog/2021/09/15/setting-up-ssh-agent-in-windows-for-passwordless-git-authentication/)

     1. Using an elevated PowerShell window (run as admin), execute the following command to install the SSH-Agent service and configure it to start automatically when you log into your machine:

        `Get-Service ssh-agent | Set-Service -StartupType Automatic -PassThru | Start-Service`

     2. To avoid needing to restart your system to get the service running for the first time, execute this command:

        `start-ssh-agent.cmd`

     3. You should also set your **git** to use windows Open SSH

        `git config --global core.sshCommand "'C:\Windows\System32\OpenSSH\ssh.exe'”`

     ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled.png)

   ```bash
   ssh-keygen -t ed25519 -C "You can write your email id or project title here or your pc name"
   ```

   ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%201.png)

4. Give this key a name, preferably your repository name to easy distinguish between different keys. Save this under ~/.ssh folder. Give full path when saving key
5. You should `protect your key with a passphrase`

   ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%202.png)

6. Check your existing keys

   ```bash
   ls -l ~/.ssh
   ```

7. Copy the `public key` in your Github account. Here, you can take any one of the two approaches

   1. Add this key to you git hub main account. So you manage all your repositories/projects using a single SSH key

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%203.png)

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%204.png)

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%205.png)

   2. Or **Deploy keys**. Add this key to you git hub project repository. This is a good approach as if anyone want to work in this project you just have to add a new key of his computer or share your own key so he can get access to this repository only. _You can launch projects from a repository on [GitHub.com](http://github.com/) to your server by using a deploy key, which is an SSH key that grants access to a single repository._

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%206.png)

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%207.png)

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%208.png)

      ![Allow write access to push to this repository default will be read-only](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%209.png)

      Allow write access to push to this repository default will be read-only

8. Copy your `public key` and add to deploy keys (Github) using command

   ```bash
   clip < ~/.ssh/you-public-key-name.pub
   ```

   ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2010.png)

9. After adding your Public key to github, `load you private key` in git bash to start a SSH keygen agent:

   1. Check if SSH agent is running

      ```bash
      ps aux | grep ssh-agent
      ```

   2. If SSH agent is not running then start a session using

      ```bash
      eval $(ssh-agent)
      ```

   3. If using PowerShell windows (**Optional**)

      ```powershell
      # start the ssh-agent in the background
      Get-Service -Name ssh-agent | Set-Service -StartupType Manual
      Start-Service ssh-agent
      ```

   4. Load your `private key` to your running SSH agent and enter your passphrase you set earlier.

      ```bash
      ssh-add ~/.ssh/your-private-key
      ```

   5. You may get _Permission error_ for an existing key, if you have copied it from somewhere. Fix it by:

      1. Open command prompt as Administrator
      2. Run this command, where replace your <username> with your username

         ```powershell
         icacls id_rsa /inheritance:r /grant "<username>:(R)"
         ```

      ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2011.png)

### Clone your repository and start working on your project

1. From your GitHub account repository, copy repository address

   ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2012.png)

2. Issue clone command

   ```bash
   **git clone** [git@github.com](mailto:git@github.com):piyushfgk/samaddar.in.git
   ```

   ![Untitled](/images/blog/2023/12/05/github-ssh-and-managing-project-repositories/Untitled%2013.png)
