---
layout: defaults/page
permalink: about.html
title: About Joel Murphy
narrow: false

title: About Joel Murphy
crumbtitle: About Joel Murphy
ogDescription: About Joel Murphy

---

{% include nav-breadcrumbs.html %}

Jump to: 
[Technical Skills](about.html#technical-skills), [Personal Life](about.html#personal-life)

---

<script>
    $(document).ready(function(){
        $('.toggle').click(function(e) {
          	e.preventDefault();
          
            var $this = $(this);
                      
            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.children("span").text("▼")
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.children("span").text("▲")
                $this.next().slideToggle(350);
            }
            
            // Load images contained in accordian  
            $('.lazy-img').lazy({
                effect: "fadeIn",
                effectTime: 300,
                threshold: 0
            });
        });
    });
</script>

<style>
p {
  font-size: 1.1em;
  margin: 1em 0;
}
.description {
  margin: 1em auto 2.25em;
}
ul {
  list-style: none;
  padding: 0;
}
ul .inner {
  padding-left: 1em;
  overflow: hidden;
  display: none;
}
ul li {
  margin: 0.5em 0;
}
ul li a.toggle {
  width: 100%;
  display: block;
  background: #e9ecef;
  color: #0d0d0d;
  padding: 0.75em;
  border-radius: 0.15em;
  transition: background 0.3s ease;
}
ul li a.toggle:hover {
  background: #dedfe0;
  border-bottom: none !important;
  color: black !important;
}
</style>


## Skills Overview
Joel is passionate about developing innovative IT solutions and delivering them to clients, or organisations in an exceptional standard. Over the past decade, Joel has learned to become a team leader, in addition to an expert software developer from running his own businesses and working in multiple digital organisations.

Joel has worked for small start-up companies, as well as corporations in contracted & employed positions. Due to this, his skills are flexible and tie into many different I.T positions - especially those involving Software Development, or Project Management. Joel is able to fit into existing roles with his skills, or train on a job to acquire skills specific to an organisation’s needs.

Joel is a Level 3 Cisco Certified technician and holds a technical 2<sup>nd</sup> class Degree from [Cardiff University](https://www.cardiff.ac.uk/){:target="_blank"} in Computer Science with Informatics & Business Information Systems. His A-Level qualifications were completed at [Ysgol Gyfun Gymraeg Glantaf](http://www.glantaf.cymru/){:target="_blank"} and consist of; Design, Technology & Product Development (D.T), Computing, and Leisure & Management Studies.

---

## Technical skills

<ul class="accordion">
    <li>
        <a class="toggle" href="javascript:void(0);">Operating Systems <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                            <img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="static/img/technologies/windows.jpg" title="Windows"
                                 alt="Windows">
                        </th>
                        <td>Windows (XP, Vista, 7, 8, 10)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/windowsserver.jpg"
                                 title="Windows Server" alt="Windows Server">
                        </th>
                        <td>Windows Server (2003, 2008, 2012, 2016, 2019)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/macos.png" title="Mac OS"
                                 alt="Mac OS">
                        </th>
                        <td>
                            Mac OS
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/centos.jpg" title="Cent OS"
                                 alt="Cent OS">
                        </th>
                        <td>CentOS</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/ubuntu.jpg" title="Ubuntu"
                                 alt="Ubuntu">
                        </th>
                        <td>Ubuntu</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </li>

    <li>
        <a class="toggle" href="javascript:void(0);">Back-end Development <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/php.png" title="PHP" alt="PHP">
                        </td>
                        <td>PHP 7+ and PSR standards [<a target="_blank"
                                                         href="https://www.php-fig.org/psr/">php-fig.org</a>]
                        </td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/laravel.png" title="Laravel"
                                 alt="Laravel"></td>
                        <td>Laravel Framework [<a target="_blank" href="https://laravel.com">laravel.com</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/zend.png" title="Zend" alt="Zend">
                        </td>
                        <td>Zend Framework [<a target="_blank" href="https://framework.zend.com">framework.zend.com</a>]
                        </td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/wordpress.png" title="WordPress"
                                 alt="WordPress"></td>
                        <td>WordPress [<a target="_blank" href="https://wordpress.com/">wordpress.com</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/composer.png" title="Composer"
                                 alt="Composer"></td>
                        <td>Composer [<a target="_blank" href="https://getcomposer.org">getcomposer.org</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/phpunit.jpeg" title="PHPUnit"
                                 alt="PHPUnit"></td>
                        <td>PHPUnit [<a target="_blank" href="https://phpunit.de/">phpunit.de</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/php.png" title="Windows"
                                 alt="Windows"></td>
                        <td>XDebug [<a target="_blank" href="https://xdebug.org/">xdebug.org</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/windows.jpg" title="Windows" alt="Windows"></td>
                        <td>Apache, virtual hosts &amp; htaccess</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </li>

    <li>
        <a class="toggle" href="javascript:void(0);">Databases <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/mysql.png" title="MySQL Server"
                                 alt="MySQL Server"></td>
                        <td> MySQL - https://www.mysql.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/windows.jpg"
                                 title="Microsoft SQL Server" alt="Microsoft SQL Server"></td>
                        <td>MS SQL - https://www.microsoft.com/en-us/sql-server/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/mongodb.png" title="MongoDB"
                                 alt="MongoDB"></td>
                        <td> MongoDB - https://www.mongodb.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/postgresql.png" title="PostgreSQL"
                                 alt="PostgreSQL"></td>
                        <td>PostgreSQL - https://www.postgresql.org/</td>
                    </tr>
                    </tbody>
                </table>

            </li>
        </ul>
    </li>

    <li>
        <a class="toggle" href="javascript:void(0);">Front-End Development <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/html5.png" title="HTML5"
                                 alt="HTML5"></td>
                        <td>HTML5 - https://www.w3.org/TR/2014/REC-html5-20141028/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/css3.png" title="CSS3" alt="CSS3">
                        </td>
                        <td>CSS3. Transforms, transitions, animations, gradients, shadows, filters, pseudo-elements, media
                            queries etc.
                        </td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/bootstrap.png" title="BootStrap"
                                 alt="BootStrap"></td>
                        <td>Bootstrap [<a target="_blank" href="https://getbootstrap.com/">getbootstrap.com</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/less.png" title="LESS" alt="LESS">
                        </td>
                        <td>LESS [<a target="_blank" href="https://lesscss.org/">lesscss.org</a>]</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/sass.png" title="LESS" alt="LESS">
                        </td>
                        <td>Sass &amp; SCSS modules [<a target="_blank" href="https://sass-lang.com/">sass-lang.com</a>]
                        </td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/javascript.jpeg" title="JavaScript" alt="JavaScript"></td>
                        <td>Javascript [more]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/es6.jpg" title="ES6" alt="ES6"></td>
                        <td>ES6</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/typescript.jpg" title="TypeScript"
                                 alt="TypeScript"></td>
                        <td>TypeScript [<a target="_blank" href="https://www.typescriptlang.org/">typescriptlang.org</a>]
                        </td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/react.png" title="ReactJS"
                                 alt="ReactJS"></td>
                        <td>React [<a target="_blank" href="https://reactjs.org/">reactjs.org</a>]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/redux.png" title="Redux"
                                 alt="Redux"></td>
                        <td>Redux for React [<a target="_blank" href="https://redux.js.org/basics/usagewithreact">redux.js.org]</a>
                        </td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/angularjs.png" title="AngularJS"
                                 alt="AngularJS"></td>
                        <td>AngularJS [<a target="_blank" href="https://angularjs.org/">angularjs.org</a>]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/angularjs.png" title="AngularJS"
                                 alt="AngularJS"></td>
                        <td>Browserify http://browserify.org/</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/mongodb.png" title="MongoDB"
                                 alt="MongoDB"></td>
                        <td>Express.js, MongoDB (MEAN stack)</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/coffeescript.png"
                                 title="CoffeeScript" alt="CoffeeScript"></td>
                        <td>CoffeeScript [<a target="_blank" href="https://coffeescript.org/">coffeescript.org</a>]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/jquery.png" title="jQuery"
                                 alt="jQuery"></td>
                        <td>JQuery [<a target="_blank" href="https://jquery.com/">jquery.com</a>]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/requirejs.png" title="RequireJS"
                                 alt="RequireJS"></td>
                        <td>RequireJS [<a target="_blank" href="https://requirejs.org/">requirejs.org</a>]</td>
                    </tr>

                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/jasmine.png" title="Jasmine"
                                 alt="Jasmine"></td>
                        <td>Jasmine JS test framework [<a target="_blank" href="https://jasmine.github.io/">jasmine.github.io</a>]
                        </td>
                    </tr>

                    </tbody>
                </table>
            </li>
        </ul>
    </li>

    <li>
        <a class="toggle" href="javascript:void(0);">Dev-Ops, Automation, Containers, and Infrastructure <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/docker.png" title="Docker"
                                 alt="Docker"></td>
                        <td>Docker - https://www.docker.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/vagrant.png" title="Vagrant"
                                 alt="Vagrant">
                        </td>
                        <td>Vagrant - https://www.vagrantup.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/ansible.png" title="Ansible"
                                 alt="Ansible">
                        </td>
                        <td>Ansible - https://www.ansible.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/terraform.png" title="Terraform"
                                 alt="Terraform"></td>
                        <td>Terraform - https://www.terraform.io/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/windows.jpg" title="Packer"
                                 alt="Packer"></td>
                        <td>Packer - https://www.packer.io/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/kubernetes.png" title="Kubernetes"
                                 alt="Kubernetes"></td>
                        <td>Kubernetes - https://kubernetes.io/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/travis.jpeg" title="Travis"
                                 alt="Travis"></td>
                        <td>Travis - https://travis-ci.org</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/heroku.png" title="Heroku"
                                 alt="Heroku"></td>
                        <td>Heroku - https://www.heroku.com/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/chef.png" title="Chef" alt="Chef">
                        </td>
                        <td>Chef - https://www.chef.io/</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/puppet.png" title="Puppet"
                                 alt="Puppet"></td>
                        <td>Puppet - https://puppet.com/</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </li>
    
    <li>
        <a class="toggle" href="javascript:void(0);">Hypervisors and Cloud <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/windows.jpg"
                                 title="Hyper-v" alt="Hyper-v">
                        </td>
                        <td>Hyper-v Hypervisor</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/virtualbox.png"
                                 title="VirtualBox"
                                 alt="VirtualBox"></td>
                        <td>Virtualbox Hypervisor</td>
                    </tr>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/technologies/vmware.png" title="VMWare"
                                 alt="VMWare"></td>
                        <td>VMWare</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </li>
    
     <li>
        <a class="toggle" href="javascript:void(0);">Software Development Methodologies <span style="float:right;">▼</span></a>
        <ul class="inner">
            <li class="mlm15">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Skill Icon</th>
                        <th scope="col">Skill Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><img class="technology-img lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="  data-src="static/img/crane.png" title="DevOps & Infrastructure" alt="DevOps & Infrastructure"></td>
                        <td>Methodologies: OOP, MVC, IoC &amp; DI, and Design Patterns</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </li>
</ul>
                                   
---

## Personal Life

<div class="card mb-3"> 
    <img class="card-img-top lazy-img"  src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="static/img/joel-and-regan-night-out-in-cardiff.jpg" title="Joel and Regan night out in Cardiff" alt="Joel and Regan night out in Cardiff">
    <div class="card-body bg-light">
        <div class="card-text"> 
           Joel and Regan on a night out in Cardiff.
        </div>
    </div>
</div>

Outside of work, Joel spends the majority of his free time enjoying activities in his hometown with his partner, Regan. This involves exploring the outdoors with their dog, attending music concerts, drinking at various bars, and eating food at food festival events. 

<div class="card mb-3"> 
    <img class="card-img-top lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="static/img/crimbo-the-dog.jpg" title="Crimbo the Dog" alt="Crimbo the Dog">
    <div class="card-body bg-light">
        <div class="card-text"> 
           Crimbo the Dog. 🐶
        </div>
    </div>
</div>

Travelling has been a hobby of Joel’s since leaving school. His goal is to travel as much of the world as possible, starting off with Europe and then going further afield to other continents. 

Joel is always up for trying new things and never sees any opportunity as a waste of time. His motto is: "you have to try everything once in life, if not, you have no place to judge something without actually experiencing it." 

{% include toc-scroll-to-top.html excludeHierarchy=true %}