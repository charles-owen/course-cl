<?php
/**
 * @file
 * API Resource for /api/course
 */
namespace CL\Course\Api;

use CL\Course\Submission\SubmissionApi;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Course\System\CourseTables;

/**
 * API Resource for /api/course
 */
class ApiCourse extends \CL\Users\Api\Resource {
	/**
	 * ApiCourse constructor
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Top-level dispatching by the API. This is called by the router for an API call
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $params
	 * @param array $properties Properties determined from the page options like :id
	 * @param int $time The current time
	 * @return mixed Result of the API operation.
	 * @throws APIException
	 * @internal param array $path The path beyond the page that invoked this call
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {

		if(count($params) < 1) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		switch($params[0]) {
			case 'members':
				$api = new ApiMembers();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $properties, $time);

			case 'submission':
				$api = new SubmissionApi();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $properties, $time);

			case 'tables':
				return $this->tables($site, $server, new CourseTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

}