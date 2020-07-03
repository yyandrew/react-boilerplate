#!/bin/bash
ansible-playbook -i .ansistrano/hosts/vagrant-vm .ansistrano/deploy.yml
