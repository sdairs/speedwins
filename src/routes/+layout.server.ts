import type { LayoutServerLoad } from './types';
import { VERCEL_ENV } from '$env/static/private';

type DeploymentInfo = {
	deploymentEnv: string;
};

export function load(): LayoutServerLoad<DeploymentInfo> {
	return {
		deploymentEnv: VERCEL_ENV
	};
}
