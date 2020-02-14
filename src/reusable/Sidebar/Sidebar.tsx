import React from 'react'

interface Isidebar {
    title?: string
    props?: any
}

const Sidebar: React.FC<Isidebar> = props => {
    return (
        <aside >
            <h1>
                {props.title}
            </h1>
            <div className="proyectos">
                <h2>your projects</h2>
            </div>
                {props.children}
        </aside>
    )
}

export default Sidebar