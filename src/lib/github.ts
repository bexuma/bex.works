import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
})

export const getLatestCommit = async (): Promise<{
  htmlUrl: string
  shaShort: string
  additions: number
  deletions: number
} | null> => {
  if (!process.env.GITHUB_PAT) {
    console.error('Missing GITHUB_PAT env variable')
    return null
  }

  try {
    const res = await octokit.request(
      'GET /repos/{owner}/{repo}/commits/{ref}',
      {
        owner: 'bexuma',
        repo: 'bex.works',
        ref: 'main',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )

    const commit = res.data

    return {
      htmlUrl: commit.html_url,
      shaShort: commit.sha.slice(0, 7),
      additions: commit.stats?.additions ?? 0,
      deletions: commit.stats?.deletions ?? 0,
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to fetch commit: ${error.message}`)
    } else {
      console.error(`Failed to fetch commit: ${String(error)}`)
    }
    return null
  }
}
