<?php

namespace CL\Course\Api;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Course\System\CourseTables;

/**
 * API Resource for /api/course
 */
class ApiCourse extends \CL\Users\Api\Resource {
	const QUERY_LIMIT = 500;

	public function __construct() {
		parent::__construct();
	}

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

			case 'tables':
				return $this->tables($site, $server, new CourseTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

}