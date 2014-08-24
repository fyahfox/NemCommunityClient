package org.nem.monitor.ux;

import org.nem.monitor.*;
import org.nem.monitor.node.*;

import java.awt.*;

/**
 * Visitor that keeps node menu items in sync with status changes.
 */
public class NodeMenuItemNodeStatusVisitor implements NodeStatusVisitor {
	private final NemNodeType nodeType;
	private final MenuItem statusMenuItem;
	private final MenuItem actionMenuItem;
	private NemNodeStatus status;

	/**
	 * Creates a new visitor.
	 *
	 * @param nodeType The node type being monitored.
	 * @param manager The node manager.
	 */
	public NodeMenuItemNodeStatusVisitor(final NemNodeType nodeType, final NodeManager manager) {
		this.nodeType = nodeType;
		this.statusMenuItem = new MenuItem();
		this.actionMenuItem = new MenuItem();

		this.actionMenuItem.addActionListener(e -> {
			switch (this.status) {
				case RUNNING:
					manager.shutdown();
					break;

				case STOPPED:
					manager.launch();
					break;
			}
		});

		this.notifyStatus(nodeType, NemNodeStatus.UNKNOWN);
	}

	/**
	 * Gets the status menu item.
	 *
	 * @return The status menu item.
	 */
	public MenuItem getStatusMenuItem() {
		return this.statusMenuItem;
	}

	/**
	 * Gets the action menu item.
	 *
	 * @return The action menu item.
	 */
	public MenuItem getActionMenuItem() {
		return this.actionMenuItem;
	}

	@Override
	public void notifyStatus(final NemNodeType type, final NemNodeStatus status) {
		if (this.nodeType != type) {
			return;
		}

		this.status = status;
		switch (this.status) {
			case RUNNING:
				this.statusMenuItem.setLabel(String.format("%s is running", this.nodeType));
				this.actionMenuItem.setLabel(String.format("Stop %s", this.nodeType));
				break;

			case STOPPED:
				this.statusMenuItem.setLabel(String.format("%s is not running", this.nodeType));
				this.actionMenuItem.setLabel(String.format("Start %s", this.nodeType));
				break;

			default:
				final String connectingMessage = String.format("Connecting to %s ...", this.nodeType);
				this.statusMenuItem.setLabel(connectingMessage);
				this.actionMenuItem.setLabel(connectingMessage);
				break;
		}
	}
}
