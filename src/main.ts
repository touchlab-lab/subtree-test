import * as core from '@actions/core'
import simpleGit from "simple-git";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const commitMessage: string = core.getInput('commitMessage')
    const tagMessage: string = core.getInput('tagMessage')
    const tagVersion: string = core.getInput('tagVersion')
    const branchName: string = core.getInput('branchName')

    core.debug(`commitMessage: ${commitMessage}`)
    core.debug(`tagMessage: ${tagMessage}`)
    core.debug(`tagVersion: ${tagVersion}`)
    core.debug(`branchName: ${branchName}`)

    const git = simpleGit();


//git subtree push --prefix subtreeDirectory https://github.com/newfivefour/vimrc.git master

    await git.raw("subtree", "push", "--prefix", "kmp", "https://github.com/kpgalligan/SharedKotlin.git", "testbranch")
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
