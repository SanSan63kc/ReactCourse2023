import React, { useCallback, useState } from 'react'
import SelectUser from '../SelectUser/SelectUser'
import Logo from '../Logo/Logo'

let logos = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO2aUQ6CMBBE5x74J3paPYghXELiKfAImggXWEPSD0KE4G7ZbclOMl8G29ed0UQLuPLTAUAFoAdAyu4B1ABOMSDeBgA08bCHQgJSJQBBwTcJiEWcaMYfCQglZrZ2B2ItcpCZk3goxqjZciJWnSAHCfKJwKMF78iSvCPwjsA7siTvCDLtiFQOslbTE28UJ3Jf2Ad7Ae7ryaxDKxeIXW51kLmocTyOkjqIlshB/vzUyu7Hh0YR5L4liJXIQSJEa5xx6fNk2ZFf3wvc58mjtdeyUyJmy3rj5CATSU+wBXAMbnOeyGX0XldLkC7CRMpwc+Fp+fd0nUDBKXi4vMDWGcArkSscJYQqwvUJacw47sIkxBAuKOsLMBCeHFEZ6+IAAAAASUVORK5CYII",
  "/vite.svg"
]

function Header() {

  return (
    <>
      <Logo image={logos[0]} />
      <SelectUser />

    </>
  )
}

export default Header