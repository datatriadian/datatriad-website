# Contributing

## Where to start

All contributions, bug reports, bug fixes, documentation improvements, enhancements, and ideas are welcome.

The best place to start is to check the [issues](https://github.com/datatriadian/datatriad-website/issues)
for something that interests you.

## Bug Reports

Please explain what is currently happening and what you expect instead.

## Working on the code

### Fork the project

In order to work on the project you will need your own fork. To do this click the "Fork" button on
this project.

Once the project is forked clone it to your local machine:

```sh
git clone https://github.com/your-user-name/datatriad-website.git
cd datatriad-website
git remote add upstream https://github.com/datatriadian/datatriad-website.git
```

This creates the directory datatriad-website and connects your repository to the upstream
(main project) repository.

### Working with the code

Once you have cloned your fork of the repository install the dependencies (you will need to have
[Node](https://nodejs.org/en/) installed for this)

```sh
npm install
```

### Creating a branch

You want your main branch to reflect only production-ready code, so create a feature branch for
making your changes. For example:

```sh
git checkout -b my-new-feature
```

This changes your working directory to the my-new-feature branch. Keep any changes in this branch
specific to one bug or feature so the purpose is clear. You can have many my-new-features and switch
in between them using the git checkout command.

Before creating this branch, make sure your main branch is up to date with the latest upstream
main version. To update your local main branch, you can do:

```sh
git checkout main
git pull upstream main --ff-only
```

### Viewing Changes

You can view changes you are making to the code by running:

```sh
npm run dev
```

Then the website will be viewable at `http://localhost:3000`

### Linting

To check to make sure your updates follow the coding standards of this repository you can run linting with:

```sh
npm run lint
```

### Testing

Please ensure that any additions/changes you make to the code have tests to go along with them.
Before submitting a pull request please ensure that all tests arew passing. The test suite is run with:

```sh
npm run test
```

### Checking the build

In order for the site to be published static pages are generated for displaying the content. You can
verify there are no issues with generating these static pages by running:

```sh
npm run generate
```

## Committing your code

Once you have made changes to the code on your branch you can see which files have changed by running:

```sh
git status
```

If new files were created that and are not tracked by git they can be added by running:

```sh
git add .
```

Now you can commit your changes in your local repository:

```sh
git commit -am 'Some short helpful message to describe your changes'
```

## Push your changes

Once your changes are ready and all linting/tests are passing you can push your changes to your forked repositry:

```sh
git push origin my-new-feature
```

origin is the default name of your remote repositry on GitHub. You can see all of your remote repositories by running:

```sh
git remote -v
```

## Making a Pull Request

After pushing your code to origin it is now on GitHub but not yet part of the datatriad-website project. When you’re ready to ask for a code review, file a pull request. Before you do, once again make sure that you have followed all the guidelines outlined in this document regarding code style, tests, and documentation. You should also double check your branch changes
against the branch it was based on by:

1. Navigating to your repository on GitHub
2. Click on Branches
3. Click on the Compare button for your feature branch
4. Select the base and compare branches, if necessary. This will be main and my-new-feature, respectively.

### Make the pull request

If everything looks good, you are ready to make a pull request. This is how you let the maintainers of the datatriad-website project know you have code ready to be reviewed. To submit the pull request:

1. Navigate to your repository on GitHub
2. Click on the Pull Request button for your feature branch
3. You can then click on Commits and Files Changed to make sure everything looks okay one last time
4. Write a description of your changes in the Conversation tab
5. Click Send Pull Request

This request then goes to the repository maintainers, and they will review the code.

### Updating your pull request

Changes to your code may be needed based on the review of your pull request. If this is the case you can make them in your branch, add a new commit to that branch, push it to GitHub, and the pull request will be automatically updated. Pushing them to GitHub again is done by:

```sh
git push origin my-new-feature
```

This will automatically update your pull request with the latest code and restart the Continuous Integration tests.

Another reason you might need to update your pull request is to solve conflicts with changes that have been merged into the main branch since you opened your pull request.

To do this, you need to “merge upstream main” in your branch:

```sh
git checkout my-new-feature
git fetch upstream
git merge upstream/main
```

If there are no conflicts (or they could be fixed automatically), a file with a default commit message will open, and you can simply save and quit this file.

In some cases a merge will not work and you will need to rebase instead. To do this run:

```sh
git checkout my-new-feature
git fetch upstream
git rebase upstream/main
```

After the feature branch has been update locally, you can now update your pull request by pushing to the branch on GitHub:

```sh
git push origin my-new-feature
```

If you rebased and get an error when pushing your changes you can resolve it with:

```sh
git push origin my-new-feature --force
```

## Delete your merged branch (optional)

Once your feature branch is accepted into upstream, you’ll probably want to get rid of the branch. First, merge upstream main into your main branch so git knows it is safe to delete your branch:

```sh
git fetch upstream
git checkout main
git merge upstream/main
```

Then you can do:

```sh
git branch -d my-new-feature
```

Make sure you use a lower-case -d, or else git won’t warn you if your feature branch has not actually been merged.

The branch will still exist on GitHub, so to delete it there do:

```sh
git push origin --delete my-new-feature
```
