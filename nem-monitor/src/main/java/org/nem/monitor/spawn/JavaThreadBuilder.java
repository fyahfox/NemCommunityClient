package org.nem.monitor.spawn;

import org.nem.core.deploy.*;
import org.nem.monitor.node.NemNodeType;

import java.io.*;
import java.util.concurrent.*;
import java.util.logging.Logger;

/**
 * Allows the starting of components as separate threads.
 */
public class JavaThreadBuilder implements JavaSpawnBuilder {
	private static final Logger LOGGER = Logger.getLogger(JavaThreadBuilder.class.getName());
	final public static ExecutorService service = Executors.newFixedThreadPool(20); // TODO 20141108: why 20 ... how many threads do you expect?

	private String[] arguments;

	/**
	 * Creates a new Java thread builder.
	 *
	 * @param nodeType The node type to start. This is used to determine the configuration file name and node type that are passed to common starter.
	 */
	public JavaThreadBuilder(final NemNodeType nodeType) {
		final String configFilePath = nodeType == NemNodeType.NCC ? "ncc-config.properties" : "nis-config.properties";
		final String nodeTypeText = nodeType == NemNodeType.NCC ? "-ncc" : "-nis";
		arguments = new String[] { "-config", configFilePath, nodeTypeText };
	}

	@Override
	public void setLogFile(final File logFile) {
		// new threads will share the same process log file, so no new log files need to be created.
	}

	@Override
	public void start() throws IOException {
		LOGGER.info(String.format("Starting Java thread: CommonStarter.start(%s).", arguments.toString()));
		service.submit(() -> CommonStarter.start(arguments));
	}
}