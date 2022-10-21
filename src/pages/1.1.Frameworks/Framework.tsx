function copyReact() {
    navigator.clipboard.writeText("npx create-react-app app");
}
function copyTs() {
    navigator.clipboard.writeText("npx create-react-app app --template typescript");
}
function copyV() {
    navigator.clipboard.writeText("vue create vue-app");
}
function copyS() {
    navigator.clipboard.writeText("npx degit sveltejs/template svelte-app");
}

export const Framework = () => {
    return (
        <div>

            <div style={{ marginTop: 85 }}>
                <h2 className='noSelect' style={{ margin: 30, textAlign: "center" }}>
                    Frameworks & Libraries
                </h2>


                <div className='all'>
                    <div className='dvs' id='dvsTop' style={{ textAlign: 'center' }}>
                        <div
                            className='sub-dvs'
                            data-bs-toggle='modal'
                            data-bs-target='#myModalReact'>
                            <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/React.svg" alt="React" />
                            <h1>React</h1>
                        </div>
                        {/* The Modal */}
                        <div className='modal fade' id='myModalReact'>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    {/* Modal Header */}
                                    <div className='modal-header'>
                                        <h4 className='modal-title'>Command</h4>
                                        <button
                                            type='button'
                                            className='btn-close'
                                            data-bs-dismiss='modal'
                                        />
                                    </div>
                                    {/* Modal body */}
                                    <div className='modal-body '>
                                        npx create-react-app app
                                    </div>
                                    {/* Modal footer */}
                                    <div className='modal-footer'>
                                        <button
                                            type='button'
                                            className='btn btn-outline-primary'
                                            data-bs-dismiss='modal' onClick={copyReact}>
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dvs' id='dvsTop' style={{ textAlign: 'center' }}>
                        <div
                            className='sub-dvs'
                            data-bs-toggle='modal'
                            data-bs-target='#myModalTs'>
                            <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/TypeScript.svg" alt="TypeScript" />
                            <h1>TypeScript</h1>
                        </div>
                        {/* The Modal */}
                        <div className='modal fade' id='myModalTs'>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    {/* Modal Header */}
                                    <div className='modal-header'>
                                        <h4 className='modal-title'>Command</h4>
                                        <button
                                            type='button'
                                            className='btn-close'
                                            data-bs-dismiss='modal'
                                        />
                                    </div>
                                    {/* Modal body */}
                                    <div className='modal-body '>
                                        npx create-react-app app --template typescript
                                    </div>
                                    {/* Modal footer */}
                                    <div className='modal-footer'>
                                        <button
                                            type='button'
                                            className='btn btn-outline-primary'
                                            data-bs-dismiss='modal' onClick={copyTs}>
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dvs' id='dvsTop' style={{ textAlign: 'center' }}>
                        <div
                            className='sub-dvs'
                            data-bs-toggle='modal'
                            data-bs-target='#myModalV'>
                            <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/Vue.svg" alt="Vue" />
                            <h1>Vue</h1>
                        </div>
                        {/* The Modal */}
                        <div className='modal fade' id='myModalV'>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    {/* Modal Header */}
                                    <div className='modal-header'>
                                        <h4 className='modal-title'>Command</h4>
                                        <button
                                            type='button'
                                            className='btn-close'
                                            data-bs-dismiss='modal'
                                        />
                                    </div>
                                    {/* Modal body */}
                                    <div className='modal-body '>
                                        vue create vue-app
                                    </div>
                                    {/* Modal footer */}
                                    <div className='modal-footer'>
                                        <button
                                            type='button'
                                            className='btn btn-outline-primary'
                                            data-bs-dismiss='modal' onClick={copyV}>
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dvs' id='dvsTop' style={{ textAlign: 'center' }}>
                        <div
                            className='sub-dvs'
                            data-bs-toggle='modal'
                            data-bs-target='#myModalS'>
                            <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/Svelte.svg" alt="Svelte" />
                            <h1>Svelte</h1>
                        </div>
                        {/* The Modal */}
                        <div className='modal fade' id='myModalS'>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    {/* Modal Header */}
                                    <div className='modal-header'>
                                        <h4 className='modal-title'>Command</h4>
                                        <button
                                            type='button'
                                            className='btn-close'
                                            data-bs-dismiss='modal'
                                        />
                                    </div>
                                    {/* Modal body */}
                                    <div className='modal-body '>
                                        npx degit sveltejs/template svelte-app
                                    </div>
                                    {/* Modal footer */}
                                    <div className='modal-footer'>
                                        <button
                                            type='button'
                                            className='btn btn-outline-primary'
                                            data-bs-dismiss='modal' onClick={copyS}>
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}