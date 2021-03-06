export default function UserInfo() {
    return (
        <div style={{textAlign: 'left', margin: '2em'}}>
            <article className="uk-comment">
                <header className="uk-comment-header">
                    <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                        <div className="uk-width-auto">
                            <img className="uk-comment-avatar" src="https://i.pravatar.cc/300" width="80" height="80" alt=""/>
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><a href="#">12 days ago</a></li>
                                <li><a href="#">Reply</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </article>
        </div>
    );
}