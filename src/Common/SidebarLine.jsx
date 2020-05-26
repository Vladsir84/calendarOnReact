// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class SidebarLine extends Component {
    state = {
        line: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ]
    }

    render() {
        const renderLines = this.state.line.slice();

        return (
            <div className="line">
                {renderLines.map(() =>
                    <div key={Math.random()} className="line__blocks"></div>
                )}
            </div>
        )

    }
}
export default SidebarLine;