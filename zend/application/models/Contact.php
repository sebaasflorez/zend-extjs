<?php 

class Application_Model_Contact 
{
	private $token = '';
	private $email = 'Sebasflorez10@gmail.com';
	private $uri   = 'https://app.alegra.com/api/v1/contacts/';
	private $authorization;
	
	function __construct()
	{
		$this->authorization	= 'Basic' . ' ' .base64_encode($this->email . ':' .$this->token);
	}
	
	public function getContacts()
	{

		$response = \Httpful\Request::get($this->uri)->addHeader('Authorization',$this->authorization)->send();
		return $response->body;

	}

	public function getOneContact($id)
	{
		$uri = $this->uri . $id;
		$response = \Httpful\Request::get($uri)
										->addHeader('Authorization',$this->authorization)
					    				->send();   
		return $response->body;

	}

	public function createContact($contact)
	{
		$response = \Httpful\Request::post($this->uri)
										->addHeader('Authorization',$this->authorization)
										->sendsJson()
										->body($contact)             
					    				->send();   
    					 
    	return $response;

	}

	public function updateContact($contact)
	{
		$response = \Httpful\Request::put($this->uri)
										->addHeader('Authorization',$this->authorization)
										->sendsJson()
										->body($contact)             
					    				->send();   
    					 
    	return $response;
	}

	public function deleteContact($id)
	{
		$uri = $this->uri . $id;
		$response = \Httpful\Request::delete($uri)
										->addHeader('Authorization',$this->authorization)
					    				->send();   
		return $response->body;

	}
}

?>