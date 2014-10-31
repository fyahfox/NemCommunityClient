package org.nem.monitor.node;

import org.nem.core.connect.client.NisApiId;
import org.nem.core.node.NodeEndpoint;

import java.io.File;

/**
 * A strategy for handling different types of NEM nodes.
 */
public interface NemNodePolicy {

	/**
	 * Gets the endpoint for the NEM node.
	 *
	 * @return The endpoint.
	 */
	public NodeEndpoint getEndpoint();

	/**
	 * Gets the node type.
	 *
	 * @return The node type.
	 */
	public NemNodeType getNodeType();

	/**
	 * Gets the lock file.
	 *
	 * @return The lock file.
	 */
	public File getLockFile();

	/**
	 * Maps the specified api id to the url path.
	 *
	 * @param apiId The api id.
	 * @return The url path.
	 */
	public String mapToUrlPath(final NisApiId apiId);

	/**
	 * Gets a value indicating whether or not this node exposes a browser GUI.
	 *
	 * @return true if a browser gui is exposed, false otherwise.
	 */
	public boolean hasBrowserGui();
}
