package org.nem.ncc.storage;

import org.nem.core.serialization.SerializableEntity;

/**
 * An interface that describes an entity that can be stored.
 */
public interface StorableEntity<TEntityName extends StorableEntityName, TEntityFileExtension extends StorableEntityFileExtension>
		extends SerializableEntity {

	/**
	 * Gets the label of the storable entity for serialization (e.g. 'wallet', 'accountLabel').
	 *
	 * @return The label.
	 */
	public String getLabel();

	/**
	 * Gets the name of the storable entity.
	 *
	 * @return The name.
	 */
	public TEntityName getName();

	/**
	 * Gets the file extension of the storable entity.
	 *
	 * @return The file extension.
	 */
	public TEntityFileExtension getFileExtension();
}
