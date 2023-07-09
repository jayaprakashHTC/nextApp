import React from 'react'
import PropTypes from 'prop-types'

const TestOne = ({ data }) => {
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default TestOne
TestOne.propTypes = {
  data: PropTypes.array,
}
