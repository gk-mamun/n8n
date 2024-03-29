import type { WorkflowEntity } from '@db/entities/WorkflowEntity';
import type { CredentialsEntity } from '@db/entities/CredentialsEntity';
import { getMetadataArgsStorage } from '@n8n/typeorm';

export const disableAutoGeneratedIds = (
	entityClass: typeof WorkflowEntity | typeof CredentialsEntity,
): void => {
	const decoratorMetadata = getMetadataArgsStorage().generations;
	const index = decoratorMetadata.findIndex((metadata) => metadata.target === entityClass);
	decoratorMetadata.splice(index, 1);
};
