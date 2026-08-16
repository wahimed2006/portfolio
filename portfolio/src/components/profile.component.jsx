
import { personalInfo, availability } from "../data/info";
const Profile = () => {
    return (
        <section id="accueil" className="hero-terminal-section">
            <div className="code-window">
                {/* En-tête de la fenêtre d'éditeur */}
                <div className="window-header">
                    <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control maximize"></span>
                    </div>
                    <span className="window-title">profile.py</span>
                </div>

                {/* Corps du code Python */}
                <div className="code-content">
                    <pre>
                        <code>
                            <span className="syntax-keyword">class</span> <span className="syntax-class">EngineerProfile</span>:
                            {"\n    "}<span className="syntax-keyword">def</span> <span className="syntax-def">__init__</span>(<span className="syntax-self">self</span>):
                            {"\n        "}<span className="syntax-self">self</span>.name = <span className="syntax-string">"{personalInfo.name}"</span>
                            {"\n        "}<span className="syntax-self">self</span>.role = <span className="syntax-string">"{personalInfo.title}"</span>
                            {"\n        "}<span className="syntax-self">self</span>.school = <span className="syntax-string">"{personalInfo.school}"</span>
                            {"\n        "}<span className="syntax-self">self</span>.location = <span className="syntax-string">"{personalInfo.location}"</span>
                            {"\n        "}<span className="syntax-self">self</span>.status = <span className="syntax-string">"{availability.status}"</span>
                            {"\n        "}<span className="syntax-self">self</span>.looking_for = [
                            {availability.lookingFor.map((item, idx) => (
                                <span key={item}>
                                    {"\n            "}<span className="syntax-string">"{item}"</span>{idx < availability.lookingFor.length - 1 ? "," : ""}
                                </span>
                            ))}
                            {"\n        "}]
                            {"\n"}
                            {"\n"}<span className="syntax-comment"># Initialisation</span>
                            {"\n"}me = <span className="syntax-class">EngineerProfile</span>()
                            {"\n"}<span className="syntax-builtin">print</span>(<span className="syntax-string">f"Loaded profile: &#123;me.name&#125; - &#123;me.role&#125;"</span>)
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Profile;