A playground to experiment integrating Danger JS via GitHub workflows.

To test a `Dangerfile` locally

```
DEBUG='*' DANGER_GITHUB_TOKEN=YOURTOKEN ./test_danger_ci repo_org/repo_name PR_number path/to/dangerfile
```

Note that this will **post comments to the PR**. I'm not sure how to prevent that from happening.

We use the `ci` command instead of the `pr` one because the latter is not a complete emulation of what `ci` does, and `ci` is the one you should run on CI.
