<?php

class IndexController extends Zend_Controller_Action
{
	
	private $model;

    public function init()
    {
	  $this->model = new \Application_Model_Contact();
    }

    public function indexAction()
    {
		
    }

    public function getallAction()
    {
       $this->_helper->json($this->model->getContacts());
    }

    public function addAction()
    {
    
    }

    public function storeAction()
    {
        $body = trim($this->getRequest()->getRawBody());
        $data = new stdClass();
        $data = json_decode($body);

        $result = $this->model->createContact($data);
        $this->_helper->viewRenderer->setNoRender(true);
        $this->getResponse()->setHeader('Content-Type', 'application/json', true);
        echo  $result;
    }

    public function viewAction()
    {
        $this->view->id =$this->getRequest()->getParam('id');
    }

    public function getoneAction()
    {
        $body = trim($this->getRequest()->getRawBody());
        $data = new stdClass();
        $data = json_decode($body);

        $result = $this->_helper->json($this->model->getOneContact($data->id));

        $this->_helper->viewRenderer->setNoRender(true);
        $this->getResponse()->setHeader('Content-Type', 'application/json', true);
        echo  $result;
    }

    public function editAction()
    {
       
    }

    public function updateAction()
    {
        $body = trim($this->getRequest()->getRawBody());
        $data = new stdClass();
        $data = json_decode($body);
       
        $result = $this->model->updateContact($data);
        $this->_helper->viewRenderer->setNoRender(true);
        $this->getResponse()->setHeader('Content-Type', 'application/json', true);
        echo  $result;
    }

    public function deleteAction()
    {

        $body = trim($this->getRequest()->getRawBody());
        $data = new stdClass();
        $data = json_decode($body);
       
        $result = $this->_helper->json($this->model->deleteContact($data->id));

        $this->_helper->viewRenderer->setNoRender(true);
        $this->getResponse()->setHeader('Content-Type', 'application/json', true);
        echo  $result;
    }
}