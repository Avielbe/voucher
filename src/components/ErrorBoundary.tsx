import React, { ReactNode } from 'react'

// interface State { hasError: boolean }
// export class ErrorBoundary extends React.Component<{}, State> {
interface Props {
    children: ReactNode
}
interface State { hasError: boolean }
export class ErrorBoundary extends React.Component<Props, State> {
    state = { hasError: false }
    static getDerivedStateFromError() { return { hasError: true } }
    render() {
        if (this.state.hasError) {
            return <div className="p-4 bg-red-100 text-red-800">משהו השתבש ברכיב העיצוב…</div>
        }
        return this.props.children
    }
}
