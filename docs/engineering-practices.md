# Engineering Practices
The practices below serve as a guide to make decisions faster when writing
code. No practice overcomes the test of time which makes this a living document.
As we get better and the team grows large we'll revisit those practices that
no longer apply.

### Culture
- Remote-first. Work from anywhere.
- Life-first. Work when you you can. Talk when you can.
- Documentation-first. Work to ensure everyone can get context.
- Be generous in appreciation. When good things happen, show recognition.

### Communication
- Github-first. We talk asyncronously to accomadate everyones life outside the
project.
- Document everything. We want to keep track of all decisions, ideas, and
conversations to help preserve context for anyone in the future, even if its
you revisiting a past discussion. Use the `docs` repo to store knowledge.

### Github
- Start with an issue. Use them as a place to temper ideas. Once acceptance
criteria are known
- Open work in progress, PRs sooner rather than later.
- Keep PRs small. The smaller the better. <500 lines is a good metric.
- Multiple logical, related commits in a PR is ok.
- Use `Merge` on Github for completed pull requests. Reverts are easier via the
Github console.
- Use github for project management. Track milestones.

### Sprints
- Sprints are setup as quarterly milestones. Frequently closed small PRs keep
velocity high.
- Sprints are tracked in Github using project tracker.
- Avoid blocking team members at all costs. We want to prevent the momemtum drag
created by large features, or refactors that prevent us from working async. Keep
PR's small and focused.

### Code Style
- Docker. We use Docker to reproduce the project in different
environments. We use Docker Compose for local development.
- Use a linter, formatter.
- Copy & paste code until you see a pattern then consolidate for
reusability. Milestones are a great time to add to the library reusable code.
- Create new services at the root level. The monorepo approach allows our small
team to move fast, increase service visibility, and minimize context switching
between services.
- Write tests. Units tests > Integration tests > Feature tests.

### Blogging
- Write blog posts about what you're working on. We will OSS some of the tech
in this project in the future. Each blog post will be used to cultivate an
audience while we work towards that milestone.
- Post via Medium. Publication coming soon.
- Dope Technophiles is the name of the email newsletter we use to capture users
interested in our work.

### Build or Buy?
- We do not have funding at the moment therefore we try to use OSS projects that
best fit our use cases. In many cases we will build our own solution.
- One of our goals to have the project generate profits so that afford to buy
the latest tech to upgrade our development process.

### The First Issue
- Issue #1 is a living thread architecture thread for the projects MVP
requirements.

### Open Source
As you work, if you create something that's interesting, consider releasing an
OSS version. We have a few projects in progress.

- Marketplace platform. An easy way to make a marketplace for your
ideas. To be released once Gatsby Manor has gained traction, a share of the
target market, and brand recognition.
- Form Wizard library. A library to create forms with easy including multi-step
forms.
