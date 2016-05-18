// Include library
require('lib/arrayExtended.js');
var React     = require('react');

var OldLink = React.createClass({
    render: function() {
        return (
            <a href={"http://coscup.org/"+this.props.year}
               target="_blank">
                {this.props.year}
            </a>
        );
    }
});

var SocialNetworkLink = React.createClass({
    render: function() {
        return (
            <a href={this.props.href}
               target="_blank">
                <img src={"images/icon-"+this.props.name+".png"}
                     alt={this.props.name} />
            </a>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        var links = [];
        for(var i=2006,k=0; i<2016; ++i) {
            links.push(<OldLink key={++k} year={i} />)
            if( i!=2015 )
                links.push(<span key={++k}>{"|"}</span>)
        }
        return (
            <footer role="banner">
                <section role="old-coscup-link">
                    {links}
                </section>
                <section role="social-network-link">
                    <SocialNetworkLink
                        name="blogger"
                        href="http://blog.coscup.org/" />
                    <SocialNetworkLink
                        name="facebook"
                        href="https://www.facebook.com/coscup/" />
                    <SocialNetworkLink
                        name="flickr"
                        href="https://www.flickr.com/people/coscup" />
                    <SocialNetworkLink
                        name="google-plus"
                        href="https://plus.google.com/+coscup/posts" />
                    <SocialNetworkLink
                        name="plurk"
                        href="https://www.plurk.com/coscup" />
                    <SocialNetworkLink
                        name="twitter"
                        href="https://twitter.com/coscup" />
                    <SocialNetworkLink
                        name="youtube"
                        href="https://www.youtube.com/user/thecoscup" />
                </section>
            </footer>
        );
    }
});

module.exports = Footer;
