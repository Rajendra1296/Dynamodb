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

# Use Personal Access Token (PAT)

Create a PAT
Go to GitHub Settings:

Navigate to GitHub Settings.
Generate New Token:

Click on "Generate new token".
Provide a note, select appropriate scopes (e.g., repo for full control of private repositories), and generate the token.
Copy the Token:

Copy the generated token immediately. You won’t be able to view it again.
Configure Git to Use PAT
Update Git Remote URL:

Change the remote URL to include your PAT. Replace YOUR_TOKEN with your actual token:

bash
Copy code
git remote set-url origin https://YOUR_TOKEN@github.com/Rajendra1296/Dynamodb.git
Push Changes:

Now try pushing your changes:

bash
Copy code
git push origin main

# image of

![1 ](<../../Screenshot 2024-08-23 at 7.10.35 PM.png>)
![2](<../../Screenshot 2024-08-23 at 7.10.35 PM.png>)

# process

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git init
Reinitialized existing Git repository in /Users/rajendra.venigalla/Desktop/mydanamite/ddb/.git/
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git status
On branch main

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
.eslintrc.js
.gitignore
.prettierrc
README.md
nest-cli.json
package-lock.json
package.json
src/
table-script.json
test/
tsconfig.build.json
tsconfig.json
yarn.lock

nothing added to commit but untracked files present (use "git add" to track)
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git addd -A
git: 'addd' is not a git command. See 'git --help'.

The most similar command is
add
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git add -A
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git status
On branch main

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file: .eslintrc.js
new file: .gitignore
new file: .prettierrc
new file: README.md
new file: nest-cli.json
new file: package-lock.json
new file: package.json
new file: src/app.controller.spec.ts
new file: src/app.controller.ts
new file: src/app.module.ts
new file: src/app.service.ts
new file: src/aws-config/dynamoDBClient.ts
new file: src/book/book.controller.spec.ts
new file: src/book/book.controller.ts
new file: src/book/book.module.ts
new file: src/book/book.service.spec.ts
new file: src/book/book.service.ts
new file: src/book/dto/book.dto.ts
new file: src/book/dto/create-book.dto.ts
new file: src/book/dto/update-book.dto.ts
new file: src/book/entities/book.entity.ts
new file: src/data.md
new file: src/main.ts
new file: table-script.json
new file: test/app.e2e-spec.ts
new file: test/jest-e2e.json
new file: tsconfig.build.json
new file: tsconfig.json
new file: yarn.lock

rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git commit -m "DynamoDB CRUD operations"
[main (root-commit) 698c18c] DynamoDB CRUD operations
Committer: rajendra.venigalla <rajendra.venigalla@rajendravenigallas-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

29 files changed, 17807 insertions(+)
create mode 100644 .eslintrc.js
create mode 100644 .gitignore
create mode 100644 .prettierrc
create mode 100644 README.md
create mode 100644 nest-cli.json
create mode 100644 package-lock.json
create mode 100644 package.json
create mode 100644 src/app.controller.spec.ts
create mode 100644 src/app.controller.ts
create mode 100644 src/app.module.ts
create mode 100644 src/app.service.ts
create mode 100644 src/aws-config/dynamoDBClient.ts
create mode 100644 src/book/book.controller.spec.ts
create mode 100644 src/book/book.controller.ts
create mode 100644 src/book/book.module.ts
create mode 100644 src/book/book.service.spec.ts
create mode 100644 src/book/book.service.ts
create mode 100644 src/book/dto/book.dto.ts
create mode 100644 src/book/dto/create-book.dto.ts
create mode 100644 src/book/dto/update-book.dto.ts
create mode 100644 src/book/entities/book.entity.ts
create mode 100644 src/data.md
create mode 100644 src/main.ts
create mode 100644 table-script.json
create mode 100644 test/app.e2e-spec.ts
create mode 100644 test/jest-e2e.json
create mode 100644 tsconfig.build.json
create mode 100644 tsconfig.json
create mode 100644 yarn.lock
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git remote add origin https://github.com/Rajendra1296/Dynamodb.git
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git push origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/Rajendra1296/Dynamodb.git'
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git push origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/Rajendra1296/Dynamodb.git'
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git push origin main
remote: No anonymous write access.
fatal: Authentication failed for 'https://github.com/Rajendra1296/Dynamodb.git/'
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git remote set-url origin https://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@github.com/Rajendra1296/Dynamodb.git
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git push origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/Rajendra1296/Dynamodb.git'
rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$ git push origin main
Enumerating objects: 37, done.
Counting objects: 100% (37/37), done.
Delta compression using up to 11 threads
Compressing objects: 100% (34/34), done.
Writing objects: 100% (37/37), 131.08 KiB | 8.19 MiB/s, done.
Total 37 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/Rajendra1296/Dynamodb.git

- [new branch] main -> main
  rajendravenigallas-MacBook-Pro:ddb rajendra.venigalla$
