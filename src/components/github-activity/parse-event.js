import React from 'react'
import parseGithubEvent from 'parse-github-event'

export default function compile (event) {
  const object = parseGithubEvent.parse(event)
  const userName = event.actor.login
  const keys = Object.keys(object.data)
  let result = object.text

  keys.forEach(key => {
    // if (key === 'repository') {
    //   result = wrapRepo(key)
    // } else {
      result = replaceKey(key)
    // }
  })

  function replaceKey (key) {
    return result.replace('{{' + key + '}}', object.data[key])
  }

  function wrapRepo (key) {
    const repo = object.data[key]
    result.replace('{{' + key + '}}', makeLink(repo))
  }

  function makeLink (repo) {
    return (
      <a href={`https://github.com/${repo}`}>
        {repo}
      </a>
    )
  }

  return userName + " " + result
}
