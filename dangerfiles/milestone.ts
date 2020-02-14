import {warn, danger} from "danger";

// Warn if the issue or PR doesn't have a milestone
const issue = await danger.github.api.issues.get(danger.github.thisPR);
if (issue.data.milestone == null) {
  warn("No milestone assigned.");
}
