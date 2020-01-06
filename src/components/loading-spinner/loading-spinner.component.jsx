import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './loading-spinner.styles'

const LoadingSpinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}

export default LoadingSpinner
