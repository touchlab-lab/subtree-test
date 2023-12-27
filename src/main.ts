import * as core from '@actions/core'
import simpleGit from "simple-git";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const git = simpleGit();

//git subtree push --prefix subtreeDirectory https://github.com/newfivefour/vimrc.git master

    await git.raw("subtree", "push", "--prefix", "kmp", `git@github.com:kpgalligan/SharedKotlin.git`, "anotherbranch")
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
