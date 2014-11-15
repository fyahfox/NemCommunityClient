package org.nem.monitor.spawn;

import java.io.*;

/**
 * Interface to spawn a new component (NCC or NIS).
 */
public interface JavaSpawnBuilder {

	/**
	 * Sets the log file.
	 *
	 * @param logFile The log file.
	 */
	public abstract void setLogFile(final File logFile);

	/**
	 * Starts to spawn the component.
	 */
	public abstract void start() throws IOException;
}