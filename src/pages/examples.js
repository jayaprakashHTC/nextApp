import React from 'react'
import TestOne from '@/components/TestOne'
import ErrorBoundary from '@/components/ErrorBoundary'
import PropTypes from 'prop-types'

function ExamplePage({ data }) {
  return (
    <>
      <ErrorBoundary data={data}>
        <TestOne data={data} />
      </ErrorBoundary>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    return { props: { data } }
  } catch (error) {
    return {
      props: {
        data: null,
        error: error.message,
      },
    }
  }
}

export default ExamplePage
ExamplePage.propTypes = {
  data: PropTypes.array,
}
